import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const BounceAnimation = keyframes`
  0% { transform: translateY(0);}
  50% { transform: translateY(-100%); }
  100% { transform: translateY(0); }
`;
const StyledDotWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  width: 100%;
  height: ${({ bigView }) => (bigView ? '100vh' : '100%')};
`;
const StyledDot = styled.div`
  background-color: ${({ theme, red }) => (red ? theme.colors.red : theme.colors.blue)};
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  transform: translateY(0);
  animation: ${BounceAnimation} 0.8s linear infinite;
  animation-delay: ${({ delay }) => delay};
`;

const LoadingAnimation = ({ red, bigView }) => (
  <StyledDotWrapper bigView={bigView}>
    <StyledDot delay="0s" red={red} />
    <StyledDot delay=".2s" red={red} />
    <StyledDot delay=".4s" red={red} />
  </StyledDotWrapper>
);
export default LoadingAnimation;

LoadingAnimation.propTypes = {
  red: PropTypes.bool,
  bigView: PropTypes.bool,
};

LoadingAnimation.defaultProps = {
  red: false,
  bigView: false,
};
