import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    position: 'fixed',
    bottom: 100,
    right: 40,
  },
  img: {
    width: 50,
  },

}));

export default function Htop(): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <a href="http://localhost:3000/health_management">
        <img className={classes.img} src="/top.png" alt="top" />
      </a>
    </div>
  );
}
