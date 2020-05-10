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
    case actions.ADD_ITEM:
      return {
        ...state,
        [action.payload.type]: [...state[action.payload.type], action.payload],
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
