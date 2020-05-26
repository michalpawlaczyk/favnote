import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';

const StyledWrapper = styled.section`
  max-height: 330px;
  max-width: 400px;
  background: #ffffff;
  border-radius: 6px;
  margin: 30px;
  padding: 18px;
  box-shadow: 0 10px 30px 0 #00000032;
`;

const StyledLine = styled.div`
  width: 100%;
  height: 3px;
  display: block;
  background: ${({ theme }) => theme.colors.blue};
`;

const StyledParagraphWrapper = styled.div`
  overflow: hidden;
  max-height: 175px;
  margin-bottom: 12px;
  line-height: 26px;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
`;

const ContentWrapper = styled.div`
  cursor: pointer;
`;

const Card = ({ title, description, onRemoveClick, onItemClick }) => {
  const isRemovingItem = useSelector(({ itemsReducer }) => itemsReducer.isRemovingItem);
  return (
    <StyledWrapper>
      <ContentWrapper onClick={onItemClick}>
        <Heading small>{title}</Heading>
        <StyledLine />
        <StyledParagraphWrapper>
          <Paragraph>{description}</Paragraph>
        </StyledParagraphWrapper>
      </ContentWrapper>
      <Button onClick={onRemoveClick}>
        {isRemovingItem ? <LoadingAnimation red /> : 'Remove'}
      </Button>
    </StyledWrapper>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  onItemClick: PropTypes.func,
};

Card.defaultProps = {
  onItemClick: null,
};

export default Card;
