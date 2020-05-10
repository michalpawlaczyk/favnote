import * as Firebase from 'firebase/app';
import 'firebase/database';

export const actions = {
  REMOVE_ITEM: 'REMOVE_ITEM',
  ADD_ITEM: 'ADD_ITEM',
  EDIT_ITEM: 'EDIT_ITEM',
  FETCH_ITEMS_REQUEST: 'FETCH_ITEMS_REQUEST',
  FETCH_ITEMS_SUCCESS: 'FETCH_ITEMS_SUCCESS',
  FETCH_ITEMS_FAILURE: 'FETCH_ITEMS_FAILURE',
};

export const removeItem = (type, id) => {
  return {
    type: actions.REMOVE_ITEM,
    payload: {
      type,
      id,
    },
  };
};

export const addItem = (item) => {
  const id = Date.now();
  return {
    type: actions.ADD_ITEM,
    payload: {
      id,
      ...item,
    },
  };
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
  const { uid } = Firebase.auth().currentUser;
  return Firebase.database()
    .ref(`${uid}/items/${type}`)
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
