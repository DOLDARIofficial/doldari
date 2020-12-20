import React from 'react';
import jwtDecode from 'jwt-decode';
import useAxios from 'axios-hooks';
// import { LoginUser } from '../../interfaces/LoginUser';
import axios from '../axios';

export interface LoginRequestUserInfo {
  userId: string;
  password: string;
}

interface LoginUser {
  googleId: string;
  name: string;
  email: string;
  imageUrl: string;
}

export interface AuthContextValue {
  user: LoginUser;
  accessToken?: string;
  handleLogin: (accessToken: string) => void;
  handleLogout: () => void;
  loginLoading: boolean;
  handleLoginLoadingStart: () => void;
  handleLoginLoadingEnd: () => void;
}

const defaultUserValue = {
  googleId: '', email: '', name: '', imageUrl: '', givenName: '', familyName: '',
};
const AuthContext = React.createContext<AuthContextValue>({
  user: defaultUserValue,
  accessToken: '',
  /* eslint-disable @typescript-eslint/no-empty-function */
  handleLogin: () => {},
  handleLogout: () => {},
  loginLoading: false,
  handleLoginLoadingStart: () => {},
  handleLoginLoadingEnd: () => {},
  /* eslint-enable @typescript-eslint/no-empty-function */
});

export function useLogin(): AuthContextValue {
  const [user, setUser] = React.useState<LoginUser>(defaultUserValue);
  const [loginLoading, setLoginLoading] = React.useState<boolean>(false);
  const [accessTokenState, setAccessToken] = React.useState<string>();

  function handleLogin(accessToken: string): void {
    try {
      if (accessToken) {
        setAccessToken(accessToken);
        const u = jwtDecode<LoginUser>(accessToken);
        setUser(u);
        axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
        console.log(user);
      }
    } catch (err) {
      console.log(err.message);
    }

    // 받아온 accessToken을 axios 기본 헤더로 설정
  }

  // 로그아웃 요청으로 서버 DB에 적재된 refresh token을 삭제.
  const [, doPostRequest] = useAxios({
    url: '/auth/logout', method: 'POST',
  }, { manual: true });

  function handleLogout(): void {
    setAccessToken(undefined);
    setUser(defaultUserValue);
    // 백엔드 요청
    doPostRequest({ data: { googleId: user.googleId } })
      .then((res) => {
        if (res.data && res.data.success) {
          window.location.href = '/';
        }
      })
      .catch((err) => {
        // 올바르게 로그아웃되지 않음.
        console.error(err);
        window.location.href = '/';
      });
  }

  // 로딩 제어 함수
  function handleLoginLoadingStart() {
    setLoginLoading(true);
  }
  function handleLoginLoadingEnd() {
    setLoginLoading(false);
  }

  return {
    user,
    accessToken: accessTokenState,
    handleLogin,
    handleLogout,
    loginLoading,
    handleLoginLoadingStart,
    handleLoginLoadingEnd,
  };
}

export default AuthContext;
