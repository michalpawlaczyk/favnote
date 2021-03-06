import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import TextAreaAutosize from 'react-textarea-autosize';
import { addItem } from 'actions';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.section`
  z-index: 4;
  position: fixed;
  min-height: 100vh;
  max-width: 550px;
  width: 100%;
  top: 0;
  right: 0;
  transition: 0.3s;
  transform: ${({ isVisible }) => (isVisible ? 'translateX(0)' : 'translateX(100%)')};
  box-shadow: 0 10px 30px 0 #00000015;
  padding: 0 20px;
  background: linear-gradient(90deg, #f3f3fb 0%, #fdfbfd 100%);
  box-shadow: 0 10px 30px 0 #00000045;
`;

const StyledFormWrapper = styled.form`
  margin: 30px 0;
`;

const StyledTextArea = styled(TextAreaAutosize)`
  width: 100%;
  min-height: 50px;
  max-height: 250px;
  resize: vertical;
  line-height: 2.6rem;
  font-size: 1.8rem;
  font-family: inherit;
  border: none;
  border-radius: 6px;
  padding: 0 20px;
`;
const StyledLine = styled.div`
  width: 100%;
  height: 3px;
  display: block;
  background: ${({ theme }) => theme.colors.blue};
  margin: 15px 0;
`;

const NewItemBar = ({ pageContext, isVisible, handleClose }) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      title: '',
      url: '',
      description: '',
    },
    onSubmit: (values, { resetForm }) => {
      const regex = /https?:\/\/(.)*/gm;
      if (!regex.exec(values.url)) {
        // eslint-disable-next-line no-param-reassign
        values.url = `http://${values.url}`;
      }
      dispatch(
        addItem({
          type: pageContext,
          ...values,
        }),
      );
      resetForm();
      handleClose();
    },
  });

  return (
    <StyledWrapper isVisible={isVisible}>
      <Heading as="h2">Add new note</Heading>
      <StyledLine />
      <StyledFormWrapper onSubmit={formik.handleSubmit}>
        <Input
          id="title"
          name="title"
          type="text"
          label="Title"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        {pageContext !== 'notes' && (
          <Input
            id="url"
            name="url"
            type="text"
            label="URL"
            onChange={formik.handleChange}
            value={formik.values.url}
          />
        )}
        <StyledTextArea
          id="description"
          name="description"
          placeholder="Description"
          onChange={formik.handleChange}
          value={formik.values.description}
          required
        />
        <Button type="submit" blue>
          Add
        </Button>
      </StyledFormWrapper>
    </StyledWrapper>
  );
};

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  isVisible: PropTypes.bool,
  handleClose: PropTypes.func,
};
NewItemBar.defaultProps = {
  pageContext: 'notes',
  isVisible: false,
  handleClose: (isVisible) => !isVisible,
};

export default NewItemBar;
