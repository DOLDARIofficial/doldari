import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Grid, Typography } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import Tabbar from './Tabbar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#ffff',
    alignContent: 'center',
    width: '100%',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    marginLeft: 50,
    display: 'flex',
    flexDirection: 'row',
    p: 1,
    m: 1,
    alignItems: 'center',
  },
  login: {
    display: 'flex',
    flexDirection: 'row-reverse',
    p: 1,
    m: 1,
    textDecorationColor: '#707070',
    alignItems: 'center',
    marginRight: 50,

  },
  loginText: {
    font: 'NotoSans',
    fontSize: 18,
  },
}));

export default function Appbar(): JSX.Element {
  const [state, setState] = React.useState(false);
  const classes = useStyles();

  React.useEffect(() => {
    if (window.location.href === 'http://localhost:3002/') {
      setState(false);
    } else {
      setState(true);
    }
  }, []);
  return (
    <div>
      <AppBar position="fixed" className={classes.root}>
        <Toolbar style={{ height: 50 }}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" />
          <Grid container className={classes.logo}>
            <Grid item>
              <Button component={Link} to="/">
                <img src="/logo.png" height="40px" alt="logo" />
              </Button>
            </Grid>
          </Grid>
          <Grid container className={classes.login}>
            <Grid item>
              <Button component={Link} to="/login" className={classes.loginText}>
                <Typography style={{ color: '#707070', fontSize: 25 }}>
                  로그인
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
        {state && <Tabbar />}
      </AppBar>
    </div>
  );
}
