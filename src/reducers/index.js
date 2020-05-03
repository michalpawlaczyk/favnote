import { actions } from 'actions';

const initialState = {
  notes: [
    {
      id: 1,
      title: 'Example title',
      twitterURL: '',
      articleURL: '',
      description: 'example description',
    },
    {
      id: 2,
      title: 'Example title',
      twitterURL: '',
      articleURL: '',
      description: 'example description',
    },
  ],
  twitters: [
    {
      id: 1,
      title: 'Example Twitter Account',
      twitterURL: '',
      articleURL: '',
      description: 'example description',
    },
    {
      id: 2,
      title: 'Example Twitter Account',
      twitterURL: '',
      articleURL: '',
      description: 'example description',
    },
  ],
  articles: [
    {
      id: 1,
      title: 'Example Article',
      twitterURL: '',
      articleURL: '',
      description: 'example description',
    },
    {
      id: 2,
      title: 'Example Article',
      twitterURL: '',
      articleURL: '',
      description: 'example description',
    },
  ],
};

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
    default:
      return state;
  }
};

export default rootReducer;
