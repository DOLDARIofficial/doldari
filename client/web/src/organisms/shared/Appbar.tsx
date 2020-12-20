import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Grid, Typography } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import Tabbar from './Tabbar';
import useAuthContext from '../../util/hooks/useAuthContext';
import StyledAvatar from './StyledAvatar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.common.white,
    alignContent: 'center',
    width: '100%',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  Appbar: {
    height: '80px',
  },
  logo: {
    marginLeft: 350,
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
    alignItems: 'center',
    marginRight: 500,

  },
  loginText: {
    font: 'NotoSans',
    color: theme.palette.grey[700],
    fontSize: '20px',
  },
}));

export default function Appbar(): JSX.Element {
  const [state, setState] = React.useState(false);
  const classes = useStyles();
  const authContext = useAuthContext();

  React.useEffect(() => {
    console.log(authContext.user.googleId);
    if (window.location.href === 'http://localhost:3000/') {
      setState(false);
    } else {
      setState(true);
    }
  }, []);
  return (
    <div>
      <AppBar position="fixed" className={classes.root}>
        <Toolbar className={classes.Appbar}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" />
          <Grid container className={classes.logo}>
            <Grid item>
              <Button component={Link} to="/">
                <img src="/logo.png" height="70px" alt="logo" />
              </Button>
            </Grid>
          </Grid>
          <Grid container className={classes.login}>
            <Grid item>
              { authContext.user.googleId.length > 1
                ? (
                  <IconButton color="primary" aria-label="upload picture" component="span">
                    <StyledAvatar
                      imageUrl={authContext.user.imageUrl}
                    />
                  </IconButton>
                )
                : (
                  <Button component={Link} to="/login">
                    <Typography className={classes.loginText}>
                      로그인
                    </Typography>
                  </Button>
                )}
            </Grid>
          </Grid>
        </Toolbar>
        {state && <Tabbar />}
      </AppBar>
    </div>
  );
}
