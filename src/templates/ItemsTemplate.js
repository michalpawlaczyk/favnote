import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useParams } from 'hooks/useParams';
import SearchInput from 'components/atoms/Input/Input';
import NewItemBar from 'components/organisms/NewItemBar/NewItemBar';

const StyledWrapper = styled.div``;

const StyledButton = styled.button`
  z-index: 2;
  cursor: pointer;
  position: fixed;
  width: 55px;
  height: 55px;
  bottom: 4vh;
  right: 4vw;
  border: none;
  border-radius: 50px;
  background: rgb(124, 184, 247);
  background: linear-gradient(90deg, rgba(124, 184, 247, 1) 0%, rgba(42, 139, 242, 1) 85%);
  transition: 0.4s;
  transform: ${({ isOpen }) => (isOpen ? 'rotateZ(-45deg)' : 'rotateZ(0)')};

  &::after,
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #ffffff;
    border-radius: 4px;
  }
  &::after {
    height: 35px;
    width: 5px;
  }
  &::before {
    height: 5px;
    width: 35px;
  }
`;

const StyledItemsWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 30px;
  grid-gap: 30px;

  @media (max-width: 1900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 650px) {
    align-items: center;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const StyledInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ItemsTemplate = ({ children }) => {
  const [isNewItemBarVisible, setIsNewItemBarVisible] = useState(false);
  const { type } = useParams();

  const toggleNewItemBar = () => {
    setIsNewItemBarVisible(!isNewItemBarVisible);
  };

  return (
    <StyledWrapper>
      <StyledInputWrapper>
        <SearchInput id="search" name="search" type="text" label="Search" search />
      </StyledInputWrapper>
      <StyledItemsWrapper>{children}</StyledItemsWrapper>
      <StyledButton onClick={toggleNewItemBar} isOpen={isNewItemBarVisible} />
      <NewItemBar
        handleClose={toggleNewItemBar}
        isVisible={isNewItemBarVisible}
        pageContext={type}
      />
    </StyledWrapper>
  );
};

ItemsTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ItemsTemplate;
