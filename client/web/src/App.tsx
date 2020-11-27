import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
// organisms
// pages
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import Roompage from './pages/rooms/Roompage';
import Mainpage from './pages/main/Mainpage';
import Bookpage from './pages/books/Bookpage';
import Login from './pages/login/Loginpage';
import Healthpage from './pages/health/Healthpage';
import BookDetail from './organisms/books/components/BookDetail';

import HealthView from './pages/health/Healthview';
import DetailPage from './pages/shared/DetailPage';
import Roomdetail from './pages/rooms/Roomdetail';

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'auto',
    position: 'relative',
    float: 'right',
    maxHeight: '100%',
    width: '100%',
    overflowScrolling: 'touch',
  },
  // toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
    minHeight: '300vh',
    width: '100%',
    backgroundColor: '#d0dcf5',
  },

}));

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#90caf9',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#a8c4f9',
    },
  },
});

function App(): JSX.Element {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.content}>
        <CssBaseline />

        <BrowserRouter>

          <Switch>
            <Route exact path="/" component={Mainpage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/rooms" component={Roompage} />
            <Route exact path="/rooms" component={Roomdetail} />
            <Route exact path="/books" component={Bookpage} />
            <Route exact path="/health_management" component={Healthpage} />
            <Route exact path="/shared_page" component={DetailPage} />
            <Route exact path="/shared_page" component={BookDetail} />
            <Route exact path="/heath_management/detail" component={HealthView} />
          </Switch>

        </BrowserRouter>

      </div>
    </ThemeProvider>
  );
}

export default App;
