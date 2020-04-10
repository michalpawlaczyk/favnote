import React from 'react';
import { storiesOf } from '@storybook/react';
import NavMenu from './NavMenu';

storiesOf('Organisms/Navigation', module).add('Normal', () => (
  <NavMenu mailAddress="example@mail.com" />
));
