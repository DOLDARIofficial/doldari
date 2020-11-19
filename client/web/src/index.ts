import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createBrowserHistory } from 'history';
import { Router, Route } from 'react-router-dom';
import { configure } from 'axios-hooks';
import App from './App';
import axios from './utils/axios';
import { GoogleLogin } from './pages/login/Loginpage';
const history = createBrowserHistory();
configure({ axios });

ReactDOM.render(

  // <Router history={history}>
  //   <Route path="/" component={App} />
  // </Router>,
  <GoogleLogin
      clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={googleLogin}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
  />,
  document.getElementById('root'),
);
