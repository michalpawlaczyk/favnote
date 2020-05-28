import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledOpenNavButton = styled.button`
  display: none;
  position: fixed;
  top: 20px;
  left: 20px;
  height: 30px;
  border: none;
  z-index: 2;
  background: transparent;
  outline: none;

  cursor: pointer;
  @media (max-width: 1110px) {
    display: block;
  }

  &::before {
    content: '';
    position: absolute;
    top: -100px;
    left: -80px;
    background: #ffffff;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    box-shadow: 23.8596px 5.61404px 50px rgba(0, 0, 0, 0.01),
      35.0877px 0px 70px rgba(86, 128, 248, 0.03), 14.0351px 0px 25px rgba(86, 128, 248, 0.02);
    transition: 0.1s;
    opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
  }
`;

// const RotateAnimation = keyframes`
//   0% { transform: translateY(0) }
//   60% { transform: translateY(10px)}
//   100% { transform: translateY(10px) rotate(45deg);}
// `;

const StyledMenuIcon = styled.div`
  display: inline-block;
  width: 30px;
  height: 20px;
  margin-right: 10px;
  position: relative;
  background: transparent;
  align-items: center;
  justify-content: center;

  & > .line {
    display: block;
    position: absolute;
    height: 0px;
    border: 1.5px solid ${({ theme }) => theme.colors.grey};
    width: 100%;
    transition: 0.4s;
    background: ${({ theme }) => theme.colors.grey};
    border-radius: 10px;
  }

  & > .first-line {
    top: 0;
    left: 0;

    transform: ${({ isOpen }) =>
      isOpen ? 'translateY(10px) rotate(45deg)' : 'translateY(0) rotate(0)'};
  }
  & > .second-line {
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
  }
  & > .third-line {
    top: 100%;
    left: 0;
    transform: ${({ isOpen }) =>
      isOpen ? 'translateY(-10px) rotate(-45deg)' : 'translateY(-100%) rotate(0)'};
  }
`;

const OpenNavMenuButton = ({ isOpen, ...others }) => (
  <StyledOpenNavButton isOpen={isOpen} {...others}>
    <StyledMenuIcon isOpen={isOpen}>
      <div className="line first-line" />
      <div className="line second-line" />
      <div className="line third-line" />
    </StyledMenuIcon>
  </StyledOpenNavButton>
);

OpenNavMenuButton.propTypes = {
  isOpen: PropTypes.bool,
};

OpenNavMenuButton.defaultProps = {
  isOpen: false,
};

export default OpenNavMenuButton;
