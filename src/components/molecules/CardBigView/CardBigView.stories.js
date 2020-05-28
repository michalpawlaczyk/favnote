import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import store from 'store';
import Card from './CardBigView';

const dummyData = {
  title: 'My best Note',
  url: 'google.com',
  titleLong:
    'My best Note My best Note My best Note My best Note My best Note My best Note My best Note My best Note',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};

storiesOf('Molecules/CardBigView', module)
  .add('Normal', () => (
    <Provider store={store}>
      <Card
        title={dummyData.title}
        description={dummyData.description}
        url={dummyData.url}
        onRemoveClick={() => console.log('Removed!')}
      />
    </Provider>
  ))
  .add('Long title', () => (
    <Provider store={store}>
      <Card
        title={dummyData.titleLong}
        description={dummyData.description}
        url={dummyData.url}
        onRemoveClick={() => console.log('Removed!')}
      />
    </Provider>
  ))
  .add('EditView', () => (
    <Provider store={store}>
      <Card
        title={dummyData.title}
        description={dummyData.description}
        url={dummyData.url}
        onRemoveClick={() => console.log('Removed!')}
        isEditClicked
      />
    </Provider>
  ));
