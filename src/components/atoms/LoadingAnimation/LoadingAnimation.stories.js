import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from 'components/atoms/Button/Button';
import LoadingAnimation from './LoadingAnimation';

storiesOf('Atoms/LoadingAnimation', module)
  .add('Normal', () => <LoadingAnimation />)
  .add('LoadingButton', () => (
    <Button>
      <LoadingAnimation dotsOnly red />
    </Button>
  ));
