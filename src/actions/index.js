import * as Firebase from 'firebase/app';
import 'firebase/database';

export const actions = {
  REMOVE_ITEM_REQUEST: 'REMOVE_ITEM_REQUEST',
  REMOVE_ITEM_SUCCESS: 'REMOVE_ITEM_SUCCESS',
  REMOVE_ITEM_FAILURE: 'REMOVE_ITEM_FAILURE',
  ADD_ITEM_REQUEST: 'ADD_ITEM_REQUEST',
  ADD_ITEM_SUCCESS: 'ADD_ITEM_SUCCESS',
  ADD_ITEM_FAILURE: 'ADD_ITEM_FAILURE',
  EDIT_ITEM_REQUEST: 'EDIT_ITEM_REQUEST',
  EDIT_ITEM_SUCCESS: 'EDIT_ITEM_SUCCESS',
  EDIT_ITEM_FAILURE: 'EDIT_ITEM_FAILURE',
  FETCH_ITEMS_REQUEST: 'FETCH_ITEMS_REQUEST',
  FETCH_ITEMS_SUCCESS: 'FETCH_ITEMS_SUCCESS',
  FETCH_ITEMS_FAILURE: 'FETCH_ITEMS_FAILURE',
};

const getUid = () => Firebase.auth().currentUser.uid;

export const removeItem = (type, id) => (dispatch) => {
  dispatch({ type: actions.REMOVE_ITEM_REQUEST });

  return Firebase.database()
    .ref(`${getUid()}/items/${type}/${id}`)
    .remove()
    .then(() => {
      dispatch({
        type: actions.REMOVE_ITEM_SUCCESS,
        payload: {
          type,
          id,
        },
      });
    })
    .catch((err) => {
      dispatch({ type: actions.REMOVE_ITEM_FAILURE });
      console.error(err);
    });
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

export const editItem = (item) => (dispatch) => {
  dispatch({ type: actions.EDIT_ITEM_REQUEST });
  return Firebase.database()
    .ref(`${getUid()}/items/${item.type}/${item.id}`)
    .update({
      ...item,
    })
    .then(() => {
      dispatch({
        type: actions.EDIT_ITEM_SUCCESS,
        payload: {
          ...item,
        },
      });
    })
    .catch((err) => {
      dispatch({ type: actions.EDIT_ITEM_FAILURE });
      console.error(err);
    });
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
