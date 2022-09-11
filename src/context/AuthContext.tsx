// Define data to be saved in the context

import React, {createContext, useReducer} from 'react';
import {authReducer} from './authReducer';

export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

// Initial State
export const authInitialState: AuthState = {
  isLoggedIn: false,
};

// how it looks and what exposes the context to its children, inside value={{}}
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  logOut: () => void;
  changeFavoriteIcon: (iconName: string) => void;
  changeUserName: (userName: string) => void;
}

// Create Context
export const AuthContext = createContext({} as AuthContextProps);

type AuthProvierProps = {
  children: JSX.Element | JSX.Element[];
};

// Component that is the provider of the context
export const AuthProvider = ({children}: AuthProvierProps) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({type: 'signIn'});
  };

  const logOut = () => {
    dispatch({type: 'logOut'});
  };

  const changeFavoriteIcon = (iconName: string) => {
    dispatch({type: 'changeFavIcon', payload: {iconName}});
  };

  const changeUserName = (userName: string) => {
    dispatch({type: 'changeUserName', payload: {userName}});
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        logOut,
        changeFavoriteIcon,
        changeUserName,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
