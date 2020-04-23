import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SearchInput from 'components/atoms/Input/Input';

const StyledWrapper = styled.div``;

const StyledItemsWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
`;

const ItemsTemplate = ({ children }) => (
  <StyledWrapper>
    <SearchInput id="search" name="search" type="text" label="Search" search />
    <StyledItemsWrapper>{children}</StyledItemsWrapper>
  </StyledWrapper>
);

ItemsTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ItemsTemplate;
