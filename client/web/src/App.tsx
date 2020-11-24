import React, { useState, useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
//organisms
//pages
import Roompage from './pages/rooms/Roompage';
import Mainpage from './pages/main/Mainpage';
import Bookpage from './pages/books/Bookpage';
import Loginpage from './pages/login/Loginpage';
import Healthpage from './pages/health/Healthpage';
import BookDetail from './organisms/books/components/BookDetail'
import {makeStyles,  createMuiTheme, ThemeProvider} from '@material-ui/core';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';

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
    padding: theme.spacing(3),
    marginTop: '70px',
    minHeight: 'calc(100vh - 123px)',
    width: '100%',
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


function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
    <div className={classes.content}>
      <CssBaseline />
    
      <BrowserRouter>
      
        <Switch>
          <Route exact path="/" component={Mainpage}/>
          <Route exact path="/login" component={Loginpage}/>
          <Route exact path="/rooms" component={Roompage}/>
          <Route exact path="/books" component={Bookpage}/>
          <Route exact path="/health_management" component={Healthpage}/>
          <Route exact path="/books/detail" component={BookDetail}/>
        </Switch>
      
      </BrowserRouter>
    
    </div>
    </ThemeProvider>
  );
}

export default App;