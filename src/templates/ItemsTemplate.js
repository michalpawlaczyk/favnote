import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useParams } from 'hooks/useParams';
import SearchInput from 'components/atoms/Input/Input';
import NewItemBar from 'components/organisms/NewItemBar/NewItemBar';

const StyledWrapper = styled.div``;

const StyledButton = styled.button`
  position: fixed;
  width: 55px;
  height: 55px;
  bottom: 4vh;
  right: 4vw;
  border: none;
  border-radius: 50px;
  background: rgb(124, 184, 247);
  background: linear-gradient(90deg, rgba(124, 184, 247, 1) 0%, rgba(42, 139, 242, 1) 85%);

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
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
`;

const ItemsTemplate = ({ children }) => {
  const [isNewItemBarVisible, setIsNewItemBarVisible] = useState(false);
  const { type } = useParams();

  const toggleNewItemBar = () => {
    setIsNewItemBarVisible(!isNewItemBarVisible);
  };

  return (
    <StyledWrapper>
      <SearchInput id="search" name="search" type="text" label="Search" search />
      <StyledItemsWrapper>{children}</StyledItemsWrapper>
      <StyledButton onClick={toggleNewItemBar} />
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
