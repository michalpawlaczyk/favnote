import React from 'react';
import { storiesOf } from '@storybook/react';
// import noteSvg from 'static/note.svg';
import { ReactComponent as NoteSvg } from 'static/note.svg';
import NavButton from './NavButton';

storiesOf('Atoms/NavButton', module)
  .add('Normal', () => <NavButton icon={NoteSvg}>Notes</NavButton>)
  .add('Active', () => (
    <NavButton active icon={NoteSvg}>
      Notes
    </NavButton>
  ));
