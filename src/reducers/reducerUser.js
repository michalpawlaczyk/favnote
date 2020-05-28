import { actions } from 'actions/actionsUser';

const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_USER_SUCCESS:
      return {
        isLogging: false,
        ...action.payload,
      };
    case actions.REGISTER_USER_SUCCESS:
      return {
        isRegistering: false,
        ...action.payload,
      };
    case actions.LOGIN_USER_REQUEST:
      return {
        isLogging: true,
        ...action.payload,
      };
    case actions.REGISTER_USER_REQUEST:
      return {
        isRegistering: true,
        ...action.payload,
      };
    case actions.LOGOUT_USER_SUCCESS:
      return {};
    default:
      return state;
  }
};

export default userReducer;
