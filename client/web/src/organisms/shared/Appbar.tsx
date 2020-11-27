import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
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
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginLeft: 50,
  },
  button: {
    textDecorationColor: '#707070',
  },

}));
interface AppbarState {
  state?: boolean;
}
export default function Appbar(data: AppbarState): JSX.Element {
  const { state } = data;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.root}>
        <Toolbar style={{ height: 50 }}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" />
          <Button component={Link} to="/" className={classes.title}>
            <img src="/logo.png" height="40px" alt="logo" />
          </Button>
          <div style={{ marginRight: 50, marginLeft: 900 }}>
            <Button className={classes.button} component={Link} to="/login">로그인</Button>
          </div>
        </Toolbar>
        {state && <Tabbar />}
      </AppBar>
    </div>
  );
}
