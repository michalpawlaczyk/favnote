import * as Firebase from 'firebase/app';
import 'firebase/database';

export const actions = {
  REMOVE_ITEM: 'REMOVE_ITEM',
  ADD_ITEM_REQUEST: 'ADD_ITEM_REQUEST',
  ADD_ITEM_SUCCESS: 'ADD_ITEM_SUCCESS',
  ADD_ITEM_FAILURE: 'ADD_ITEM_FAILURE',
  EDIT_ITEM: 'EDIT_ITEM',
  FETCH_ITEMS_REQUEST: 'FETCH_ITEMS_REQUEST',
  FETCH_ITEMS_SUCCESS: 'FETCH_ITEMS_SUCCESS',
  FETCH_ITEMS_FAILURE: 'FETCH_ITEMS_FAILURE',
};

const getUid = () => Firebase.auth().currentUser.uid;

export const removeItem = (type, id) => {
  return {
    type: actions.REMOVE_ITEM,
    payload: {
      type,
      id,
    },
  };
};

export const addItem = (item) => (dispatch) => {
  dispatch({ type: actions.ADD_ITEM_REQUEST });
  const id = Date.now();
  return Firebase.database()
    .ref(`${getUid()}/items/${item.type}/${id}`)
    .set({
      id,
      ...item,
    })
    .then(() => {
      dispatch({
        type: actions.ADD_ITEM_SUCCESS,
        itemID: id,
        payload: {
          id,
          ...item,
        },
      });
    })
    .catch((err) => {
      dispatch({ type: actions.ADD_ITEM_FAILURE });
      console.error(err);
    });
};

export const editItem = (item) => {
  return {
    type: actions.EDIT_ITEM,
    payload: {
      ...item,
    },
  };
};

export const fetchItems = (type) => (dispatch) => {
  dispatch({ type: actions.FETCH_ITEMS_REQUEST });
  return Firebase.database()
    .ref(`${getUid()}/items/${type}`)
    .once('value')
    .then((snapshot) => {
      const data = snapshot.val();
      dispatch({
        type: actions.FETCH_ITEMS_SUCCESS,
        payload: {
          type,
          data,
        },
      });
    })
    .catch((err) => {
      dispatch({ type: actions.FETCH_ITEMS_FAILURE });
      console.error(err);
    });
};
