import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createBrowserHistory } from 'history';
import { Router, Route } from 'react-router-dom';
import { configure } from 'axios-hooks';
import App from './App';
import axios from './util/axios';

const history: any = createBrowserHistory();
configure({ axios });

function Index(): JSX.Element {
  return (
    <div>
      <Router history={history}>
        <Route path="/" component={App} />
      </Router>
      ,
    </div>
  );
}
ReactDOM.render(
  <Index />,
  document.getElementById('root'),
);
