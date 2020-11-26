import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createBrowserHistory } from 'history';
import { Router, Route } from 'react-router-dom';
import { configure } from 'axios-hooks';
import App from './App';
import axios from './util/axios';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import './assets/doldari.css';

const history = createBrowserHistory();
configure({ axios });

const theme = createMuiTheme({
  typography: {
    fontFamily : 'sans-serif'
  }
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Router history={history}>
     <Route path="/" component={App} />
    </Router>,
  </MuiThemeProvider>,
  document.getElementById('root'),
);