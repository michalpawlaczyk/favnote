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
  console.log(action);
  return state;
};

export default rootReducer;
