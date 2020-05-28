import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import OpenNavMenuButton from './OpenNavMenuButton';

const Wrapper = styled.div`
  background: orange;
  height: 500px;
  width: 500px;
`;

storiesOf('Atoms/OpenNavMenuButton', module).add('Normal', () => {
  const [value, set] = useState(false);
  return (
    <Wrapper>
      <OpenNavMenuButton isOpen={value} onClick={() => set(!value)}>
        Menu
      </OpenNavMenuButton>
    </Wrapper>
  );
});
