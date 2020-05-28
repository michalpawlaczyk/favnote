import React, { useState } from 'react';
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
    `};

  ${({ notEmpty }) =>
    notEmpty &&
    css`
      transform: translate(10px, -100%);
    `};

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
  margin: 20px 0;
  ${({ search }) =>
    search &&
    css`
      margin: 20px 20px;
      @media (max-width: 570px) {
        max-width: 90%;
      }
    `};
`;

const Input = ({ id, name, type, label, search, ...other }) => {
  const [isValueNotEmpty, setIsValueNotEmpty] = useState(false);
  const handleInputChange = (event) => {
    if (event.target.value.length > 0) {
      setIsValueNotEmpty(true);
    } else {
      setIsValueNotEmpty(false);
    }
  };

  return (
    <StyledWrapper search={search}>
      <StyledInput
        id={id}
        name={name}
        type={type}
        search={search}
        onKeyDown={(event) => handleInputChange(event)}
        onBlur={(event) => handleInputChange(event)}
        {...other}
      />
      <StyledLabel htmlFor={id} search={search} notEmpty={isValueNotEmpty}>
        {label}
      </StyledLabel>
    </StyledWrapper>
  );
};

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
