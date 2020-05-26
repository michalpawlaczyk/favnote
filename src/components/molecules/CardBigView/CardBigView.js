import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TextAreaAutosize from 'react-textarea-autosize';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { editItem } from 'actions';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';

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
  width: 100%;
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

const CardBigView = ({
  pageType,
  onRemoveClick,
  onEditClick,
  title,
  description,
  isEditClicked,
  itemId,
}) => {
  const [isEditingItem, isRemovingItem] = useSelector(({ itemsReducer }) => [
    itemsReducer.isEditingItem,
    itemsReducer.isRemovingItem,
  ]);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      id: itemId,
      title,
      articleUrl: '',
      twitterURL: '',
      description,
    },
    onSubmit: (values) => {
      dispatch(
        editItem({
          type: pageType,
          ...values,
        }),
      );
      onEditClick();
    },
  });

  return (
    <StyledWrapper>
      {isEditClicked ? (
        <form onSubmit={formik.handleSubmit}>
          <StyledTitleInput
            type="text"
            name="title"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          <StyledLine />
          <StyledParagraphWrapper>
            <StyledDescriptionInput
              type="text"
              name="description"
              onChange={formik.handleChange}
              value={formik.values.description}
            />
          </StyledParagraphWrapper>
          <StyledButtonWrapper>
            <Button type="submit" blue>
              Done
            </Button>
          </StyledButtonWrapper>
        </form>
      ) : (
        <>
          <Heading small as="h2">
            {title}
          </Heading>
          <StyledLine />
          <StyledParagraphWrapper>
            <Paragraph>{description}</Paragraph>
          </StyledParagraphWrapper>
          <StyledButtonWrapper>
            <Button onClick={onEditClick} blue>
              {isEditingItem ? <LoadingAnimation /> : 'Edit'}
            </Button>
            <Button onClick={onRemoveClick} isLoading={isRemovingItem}>
              {isRemovingItem ? <LoadingAnimation /> : 'Remove'}
            </Button>
          </StyledButtonWrapper>
        </>
      )}
    </StyledWrapper>
  );
};

CardBigView.propTypes = {
  onRemoveClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isEditClicked: PropTypes.bool,
  pageType: PropTypes.string,
  itemId: PropTypes.number.isRequired,
};

CardBigView.defaultProps = {
  isEditClicked: false,
  pageType: 'notes',
};

export default CardBigView;
