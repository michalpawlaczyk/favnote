import { actions } from 'actions';

const initialState = {};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.REMOVE_ITEM:
      return {
        ...state,
        [action.payload.type]: [
          ...state[action.payload.type].filter((item) => item.id !== action.payload.id),
        ],
      };
    case actions.ADD_ITEM_SUCCESS:
      return {
        ...state,
        [action.payload.type]: {
          [action.itemID]: { ...action.payload },
          ...state[action.payload.type],
        },
      };
    case actions.EDIT_ITEM:
      return {
        ...state,
        [action.payload.type]: [
          ...state[action.payload.type].map((item) => {
            if (item.id === action.payload.id) {
              return action.payload;
            }
            return item;
          }),
        ],
      };
    case actions.FETCH_ITEMS_SUCCESS: {
      return {
        ...state,
        [action.payload.type]: action.payload.data,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
