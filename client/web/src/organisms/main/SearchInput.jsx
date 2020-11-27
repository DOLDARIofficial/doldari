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
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    variant: 'outlined',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
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
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
      <Grid container spacing={2} xs={12}>
        <Grid item xs={4}>
          <Button component={Link} to="/rooms">
            <img src="i_book.png" alt="book" />
          </Button>
          <Typography style={{ paddingTop: 25, paddingLeft: 30 }}>
            자취방 양도
          </Typography>
          <Typography style={{ paddingLeft: 20 }}>
            하우스 메이트
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Button component={Link} to="/health_management">
            <img src="i_book.png" alt="book" />
          </Button>
          <Typography style={{ paddingTop: 25, paddingLeft: 40 }}>
            헬스장 양도
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <Button component={Link} to="/books">
            <img src="i_book.png" alt="book" />
          </Button>
          <Typography style={{ paddingTop: 25, paddingLeft: 40 }}>
            책방
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
