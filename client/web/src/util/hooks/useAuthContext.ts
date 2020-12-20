import React from 'react';
import AuthContext from '../contexts/AuthContext';

interface LoginUser {
  googleId: string;
  name: string;
  email: string;
  imageUrl: string;
}

interface AuthContextValue {
  user: LoginUser;
  accessToken?: string;
  handleLogin: (accessToken: string) => void;
  handleLogout: () => void;
  loginLoading: boolean;
  handleLoginLoadingStart: () => void;
  handleLoginLoadingEnd: () => void;
}

export default function useAuthContext(): AuthContextValue {
  return React.useContext(AuthContext);
}
