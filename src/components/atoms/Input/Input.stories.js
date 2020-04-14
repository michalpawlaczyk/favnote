import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Input from './Input';

const StyledWrapper = styled.div`
  height: 500px;
  width: 700px;
  padding: 70px;
`;

storiesOf('Atoms/Input', module)
  .add('Normal', () => (
    <StyledWrapper>
      <Input id="name" name="name" type="text" label="Type your name" />
    </StyledWrapper>
  ))
  .add('Search', () => (
    <StyledWrapper>
      <Input id="search" name="search" type="text" label="Search" search />
    </StyledWrapper>
  ));
