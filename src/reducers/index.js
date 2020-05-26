import { actions } from 'actions';

const initialState = {
  isLoadingItems: false,
  isRemovingItem: false,
  isEditingItem: false,
};

const filterObject = (object, id) => {
  const filteredObject = {};

  Object.keys(object).filter((key) => {
    if (parseInt(key, 10) !== id) {
      filteredObject[key] = object[key];
    }
    return null;
  });
  return filteredObject;
};

const removeItem = (state, action) => {
  const stateWithDeletedProject = filterObject(state[action.payload.type], action.payload.id);
  return {
    ...state,
    isRemovingItem: false,
    [action.payload.type]: { ...stateWithDeletedProject },
  };
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.REMOVE_ITEM_REQUEST:
      return {
        ...state,
        isRemovingItem: true,
      };
    case actions.REMOVE_ITEM_SUCCESS:
      return removeItem(state, action);
    case action.ADD_ITEM_REQUEST:
      return {
        ...state,
        isLoadingItems: true,
      };
    case actions.ADD_ITEM_SUCCESS:
      return {
        ...state,
        isLoadingItems: false,
        [action.payload.type]: {
          [action.payload.id]: { ...action.payload },
          ...state[action.payload.type],
        },
      };
    case actions.EDIT_ITEM_REQUEST:
      return {
        ...state,
        isEditingItem: true,
      };
    case actions.EDIT_ITEM_SUCCESS:
      return {
        ...state,
        isEditingItem: false,
        [action.payload.type]: {
          ...state[action.payload.type],
          [action.payload.id]: { ...action.payload },
        },
      };
    case actions.FETCH_ITEMS_REQUEST:
      console.log('Loading...');
      return {
        ...state,
        isLoadingItems: true,
      };
    case actions.FETCH_ITEMS_SUCCESS: {
      return {
        ...state,
        isLoadingItems: false,
        [action.payload.type]: action.payload.data,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
