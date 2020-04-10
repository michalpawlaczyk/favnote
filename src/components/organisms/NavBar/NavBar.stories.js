import React from 'react';
import { storiesOf } from '@storybook/react';
import NavBar from './NavBar';

storiesOf('Organisms/Navigation', module).add('Normal', () => (
  <NavBar mailAddress="example@mail.com" />
));
