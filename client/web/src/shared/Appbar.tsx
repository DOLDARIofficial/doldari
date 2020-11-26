import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
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
    marginLeft: 200,
    flexGrow: 1,
  },
  button: {
    textDecorationColor: '#707070',
  },

}));

export default function ButtonAppBar(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.root}>
        <Toolbar style={{ height: 80 }}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" />
          <Typography variant="h6" className={classes.title}>
            <img src="logo.png" height="40px" alt="?" />
          </Typography>
          <div style={{ marginRight: 200 }}>
            <Button className={classes.button}>로그인</Button>
            <Button className={classes.button}>회원가입</Button>
          </div>
        </Toolbar>
        <Tabbar />
      </AppBar>
    </div>
  );
}
