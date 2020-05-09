import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Firebase from 'firebase/app';
import 'firebase/auth';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    Firebase.auth().onAuthStateChanged((user) => {
      setIsLogin(!!user);
    });
  }, [isLogin]);

  return (
    <AuthContext.Provider
      value={{
        isLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
