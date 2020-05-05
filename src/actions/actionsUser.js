import Firebase from 'firebase/app';
import 'firebase/auth';

export const actions = {
  LOGIN_USER_REQUEST: 'LOGIN_USER_REQUEST',
  LOGIN_USER_SUCCESS: 'LOGIN_USER_SUCCESS',
  LOGIN_USER_FAILURE: 'LOGIN_USER_FAILURE',
  REGISTER_USER_REQUEST: 'REGISTER_USER_REQUEST',
  REGISTER_USER_SUCCESS: 'REGISTER_USER_SUCCESS',
  REGISTER_USER_FAILURE: 'REGISTER_USER_FAILURE',
  LOGOUT_USER: 'LOGOUT_USER',
};

export const LoginUserWithMail = (mail, password) => (dispatch) => {
  dispatch({ type: actions.LOGIN_USER_REQUEST });

  return Firebase.auth()
    .signInWithEmailAndPassword(mail, password)
    .then(({ user }) => {
      const { email, emailVerified, uid } = user;
      dispatch({
        type: actions.LOGIN_USER_SUCCESS,
        payload: {
          email,
          emailVerified,
          uid,
        },
      });
    })
    .catch((e) => {
      console.log(e.message);
      dispatch({ type: actions.LOGIN_USER_FAILURE });
    });
};

export const LoginOrRegisterWithGoogle = () => (dispatch) => {
  const provider = new Firebase.auth.GoogleAuthProvider();
  dispatch({ type: actions.LOGIN_USER_REQUEST });

  return Firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      const { accessToken } = result.credential;
      const { email, emailVerified, uid } = result.user;
      dispatch({
        type: actions.LOGIN_USER_SUCCESS,
        payload: {
          email,
          emailVerified,
          uid,
          accessToken,
        },
      });
    })
    .catch(({ code, message }) => {
      console.log(`${code}  ${message}`);
      dispatch({ type: actions.LOGIN_USER_FAILURE });
    });
};

export const RegisterWithMail = (mail, password) => (dispatch) => {
  dispatch({ type: actions.REGISTER_USER_REQUEST });

  return Firebase.auth()
    .createUserWithEmailAndPassword(mail, password)
    .then(({ user }) => {
      const { email, emailVerified, uid } = user;
      dispatch({
        type: actions.REGISTER_USER_SUCCESS,
        payload: {
          email,
          emailVerified,
          uid,
        },
      });
    })
    .catch((e) => {
      console.log(e.message);
      dispatch({ type: actions.REGISTER_USER_FAILURE });
    });
};
