import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Atoms/Button', module)
  .add('Red', () => <Button>remove</Button>)
  .add('Blue', () => <Button blue>edit</Button>);
