import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TextAreaAutosize from 'react-textarea-autosize';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.section`
  width: 80%;
  max-width: 1600px;
  padding: 36px;
  margin: 40px auto;
  background: #ffffff;
  border-radius: 6px;
  box-shadow: 0 10px 30px 0 #00000015;
`;

const StyledLine = styled.div`
  width: 100%;
  height: 3px;
  display: block;
  background: ${({ theme }) => theme.colors.blue};
  margin: 15px 0;
`;

const StyledParagraphWrapper = styled.div`
  line-height: 2.6rem;
`;

const StyledButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 130px 130px;
  grid-auto-columns: min-content;
  margin: 30px 0 0 0;
  grid-column-gap: 30px;
`;

const StyledTitleInput = styled.input`
  margin: 15px 0 0 0;
  border: none;
  font-size: 1.8rem;
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;
const StyledDescriptionInput = styled(TextAreaAutosize)`
  border: none;
  width: 100%;
  resize: vertical;
  line-height: 2.6rem;
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  color: ${({ theme }) => theme.colors.grey};
  font-family: inherit;
`;

const CardBigView = ({ onRemoveClick, onEditClick, title, description, isEditClicked }) => (
  <StyledWrapper>
    {isEditClicked ? (
      <StyledTitleInput type="text" name="title" defaultValue={title} />
    ) : (
      <Heading small as="h2">
        {title}
      </Heading>
    )}
    <StyledLine />
    <StyledParagraphWrapper>
      {isEditClicked ? (
        <StyledDescriptionInput type="text" name="description" defaultValue={description} />
      ) : (
        <Paragraph>{description}</Paragraph>
      )}
    </StyledParagraphWrapper>
    <StyledButtonWrapper>
      <Button onClick={onEditClick} blue>
        {isEditClicked ? 'Done' : 'Edit'}
      </Button>
      {!isEditClicked && <Button onClick={onRemoveClick}>Remove</Button>}
    </StyledButtonWrapper>
  </StyledWrapper>
);

CardBigView.propTypes = {
  onRemoveClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isEditClicked: PropTypes.bool,
};

CardBigView.defaultProps = {
  isEditClicked: false,
};

export default CardBigView;
