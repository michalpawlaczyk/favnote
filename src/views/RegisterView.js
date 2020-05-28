import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RegisterWithMail, LoginOrRegisterWithGoogle } from 'actions/actionsUser';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import applogo from 'static/applogo.svg';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { routes } from 'routes/routes';

const StyledWrapper = styled.section`
  max-width: 600px;
  max-height: 600px;
  margin: 100px auto;
`;

const StyledButtonWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  max-width: 300px;
  margin: 0 auto;
`;

const StyledApplogo = styled.img`
  margin: 0 auto;
  display: block;
`;

const StyledParagraph = styled(Paragraph)`
  display: block;
  text-align: center;
  margin: 4vh auto 0;
`;

const RegisterView = () => {
  const dispatch = useDispatch();
  const { isRegistering } = useSelector(({ userReducer }) => userReducer);

  const handleLoginWithGoogle = () => {
    dispatch(LoginOrRegisterWithGoogle());
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmpassword: '',
    },
    onSubmit: ({ email, password, confirmpassword }) => {
      if (password === confirmpassword) {
        dispatch(RegisterWithMail(email, password));
      }
    },
  });

  return (
    <StyledWrapper>
      <StyledApplogo src={applogo} alt="App logo." />
      <form onSubmit={formik.handleSubmit}>
        <Input
          id="email"
          name="email"
          type="email"
          label="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
          required
        />
        <Input
          id="password"
          name="password"
          type="password"
          label="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
          required
        />
        <Input
          id="confirmpassword"
          name="confirmpassword"
          type="password"
          label="Confirm password"
          onChange={formik.handleChange}
          value={formik.values.confirmpassword}
          required
        />
        <StyledButtonWrapper>
          <Button type="submit">{isRegistering ? <LoadingAnimation red /> : 'Register'}</Button>
          <Button onClick={handleLoginWithGoogle} blue type="button">
            {isRegistering ? <LoadingAnimation /> : 'Sign in with Google'}
          </Button>
        </StyledButtonWrapper>
      </form>
      <StyledParagraph as={NavLink} to={routes.login}>
        Already have an account ? Click here!
      </StyledParagraph>
    </StyledWrapper>
  );
};

export default RegisterView;
