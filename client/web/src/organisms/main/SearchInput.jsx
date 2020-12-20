import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Button, Typography, Grid } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';

import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 10,
    borderStyle: 'solid',
    color: '#a8c4f9',
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '550px',
    height: '70px',
    variant: 'outlined',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
    widht: '40px',
    height: '40px',
  },
  divider: {
    height: 28,
    margin: 4,
  },
  icons: {
    flexGrow: 1,
    justifyContent: 'center',
    display: 'flex',
    alignContent: 'center',
  },
  buttonFont1: {
    fontWeight: 'bold',
    paddingTop: 25,
    paddingLeft: 30,
    fontSize: '20px',
  },
  buttonFont2: {
    fontWeight: 'bold',
    paddingLeft: 20,
    fontSize: '20px',
  },
  buttonFont3: {
    fontWeight: 'bold',
    paddingLeft: 40,
    paddingTop: 25,
    fontSize: '20px',
  },
}));

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <div>
      <div style={{ marginBottom: 30 }}>
        <Paper component="form" elevation={0} className={classes.root}>
          <InputBase
            className={classes.input}
            inputProps={{ 'aria-label': ' ' }}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon style={{ color: '#a8c4f9', width: 40, height: 30 }} />
          </IconButton>
        </Paper>
      </div>
      <Grid container xs={12} className={classes.icons}>
        <Grid item xs={4}>
          <Button component={Link} to="/rooms">
            <img src="i_home.png" alt="book" />
          </Button>
          <Typography className={classes.buttonFont1}>
            자취방 양도
          </Typography>
          <Typography className={classes.buttonFont2}>
            하우스 메이트
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Button component={Link} to="/health_management">
            <img src="i_health.png" alt="book" />
          </Button>
          <Typography className={classes.buttonFont3}>
            헬스장 양도
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <Button component={Link} to="/books">
            <img src="i_book.png" alt="book" />
          </Button>
          <Typography className={classes.buttonFont3}>
            책방
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
