import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import magnifierIcon from 'static/search.svg';

const StyledInput = styled.input`
  position: relative;
  height: 50px;
  max-width: 550px;
  width: 100%;
  padding-left: 10px;
  border: none;
  border-radius: 6px;
  font-size: 1.8rem;
  transition: 0.3s;
  font-weight: ${({ theme }) => theme.font.weight.medium};

  ${({ search }) =>
    search &&
    css`
      padding: 0 0 0 40px;
      background-image: url(${magnifierIcon});
      background-size: 15px;
      background-position: 15px 50%;
      background-repeat: no-repeat;
    `};

  /* ::before {
    content: '';
    background: #000000;
    display: block;
    height: 50px;
    max-width: 550px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    box-shadow: 0 10px 30px 0 #00000045;
  } */
  :focus {
  }
`;

const StyledLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  color: ${({ theme }) => theme.colors.grey};
  margin-bottom: 5px;
  font-size: 1.8rem;
  transition: 0.3s;
  transform: translate(20px, 70%);

  ${({ search }) =>
    search &&
    css`
      transform: translate(40px, 70%);
    `}

  ${StyledInput}:focus + & {
    transform: translate(10px, -100%);
  }
`;

const StyledWrapper = styled.div`
  position: relative;
  max-height: 50px;
  height: 100%;
  max-width: 550px;
  width: 100%;
  margin: 20px 10px;
`;

const Input = ({ id, name, type, label, search }) => (
  <StyledWrapper>
    <StyledInput id={id} name={name} type={type} search={search} />
    <StyledLabel for={id} search={search}>
      {label}
    </StyledLabel>
  </StyledWrapper>
);

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  search: PropTypes.bool,
};

Input.defaultProps = {
  label: '',
  search: false,
};

export default Input;
