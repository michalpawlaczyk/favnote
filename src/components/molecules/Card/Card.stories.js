import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';

const dummyData = {
  title: 'My best Note',
  titleLong:
    'My best Note My best Note My best Note My best Note My best Note My best Note My best Note',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};

storiesOf('Molecules/Card', module).add('Normal', () => (
  <div>
    <Card
      title={dummyData.title}
      description={dummyData.description}
      onRemoveClick={() => console.log('Removed!')}
    />
    <Card
      title={dummyData.titleLong}
      description={dummyData.description}
      onRemoveClick={() => console.log('Removed!')}
    />
  </div>
));
