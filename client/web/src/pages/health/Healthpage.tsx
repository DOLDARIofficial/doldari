import React from 'react';
import {
  makeStyles, Paper, Grid, Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Hgrid from '../../organisms/health/Hgrid';
import Hpagenation from '../../organisms/health/Hpagenation';
import Appbar from '../../organisms/shared/Appbar';
import Htop from '../../organisms/health/Htop';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {

    /* 
    margin: 33 35 45 300,
    padding: 50 50 0, */
    maxWidth: 1200,
    marginTop: 150,
    borderRadius: 40,
  },
  image: {
    width: 150,
    height: 125,
  },
  img: {
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  img_t: {
    width: 150,
    position: 'absolute',
    top: 160,
    right: 260,
  },
}));

export default function Healthpage(): JSX.Element {
  const classes = useStyles();

  return (
    <div style={{
      paddingRight: 100, paddingLeft: 220, paddingTop: 100, color: '#d0dcf5',
    }}
    >
      <Appbar />
      <Htop />
      <Button className={classes.img_t} size="medium" component={Link} to="/heath_management/upload">
        <img width="150" src="transfer.png" alt="양도하기" />
      </Button>

      <Paper className={classes.paper} variant="outlined" style={{ padding: 30 }}>
        <Grid container spacing={2}>
          <Hgrid />
          <Hgrid />
          <Hgrid />
          <Hgrid />
          <Hgrid />
          <Hgrid />
          <Hgrid />
          <Hgrid />
        </Grid>
      </Paper>
      <Hpagenation />
    </div>
  );
}
