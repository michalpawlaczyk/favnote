import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { LoginUserWithMail, LoginOrRegisterWithGoogle } from 'actions/actionsUser';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import applogo from 'static/applogo.svg';

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

const LoginView = () => {
  const dispatch = useDispatch();

  const handleLoginWithGoogle = () => {
    dispatch(LoginOrRegisterWithGoogle());
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: ({ email, password }) => {
      dispatch(LoginUserWithMail(email, password));
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
        />
        <Input
          id="password"
          name="password"
          type="password"
          label="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <StyledButtonWrapper>
          <Button type="submit">Login</Button>
          <Button onClick={handleLoginWithGoogle} blue type="button">
            Sign in with Google
          </Button>
        </StyledButtonWrapper>
      </form>
    </StyledWrapper>
  );
};

export default LoginView;
