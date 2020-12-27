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
import DetailPage from './pages/shared/WritePage';
import Roomdetail from './pages/rooms/Roomdetail';
import AuthContext, { useLogin } from './util/contexts/AuthContext';
import useAutoLogin from './util/hooks/useAutoLogin';
import BookPage from './pages/shared/BookPage';
import Hupload from './pages/health/Hupload';

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
      // Purple and green p`lay nicely together.
      main: '#90caf9',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#a8c4f9',
    },
    info: {
      light: '#f5a1a1',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export default function App(): JSX.Element {
  const classes = useStyles();
  const {
    user, accessToken, handleLogout, handleLogin,
    loginLoading, handleLoginLoadingStart, handleLoginLoadingEnd,
  } = useLogin();

  useAutoLogin(user.googleId, handleLogin, handleLoginLoadingStart, handleLoginLoadingEnd);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.content}>

        <CssBaseline />

        {/* 로그인 여부 Context */}
        <AuthContext.Provider value={{
          user, accessToken, handleLogin, handleLogout, loginLoading, handleLoginLoadingStart, handleLoginLoadingEnd,
        }}
        >

          <BrowserRouter>

            <Switch>
              <Route exact path="/" component={Mainpage} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/rooms" component={Roompage} />
              <Route exact path="/rooms/Roomdetail" component={Roomdetail} />
              <Route exact path="/books" component={Bookpage} />
              <Route exact path="/health_management" component={Healthpage} />
              <Route exact path="/shared_page" component={DetailPage} />
              <Route exact path="/books/detail" component={BookDetail} />
              <Route exact path="/heath_management/detail" component={HealthView} />
              <Route exact path="/books/detail" component={BookDetail} />
              <Route exact path="/book" component={BookPage} />
              <Route exact path="/health_management/upload" component={Hupload} />

            </Switch>

          </BrowserRouter>
        </AuthContext.Provider>
      </div>

    </ThemeProvider>
  );
}
