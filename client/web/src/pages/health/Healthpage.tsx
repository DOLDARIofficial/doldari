import React from 'react';
import {
  makeStyles, Paper, Grid,
} from '@material-ui/core';
import Hgrid from '../../organisms/health/Hgrid';
import Hpagenation from '../../organisms/health/Hpagenation';
import Appbar from '../../organisms/shared/Appbar';
import Htop from '../../organisms/health/Htop';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    maxWidth: 1200,
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
}));

export default function Healthpage(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Appbar />
      <Htop />
      <div style={{
        paddingTop: 100, display: 'flex', justifyContent: 'center',
      }}
      >
        <Paper className={classes.paper} variant="outlined">
          <Grid container spacing={2}>
            <Hgrid />
            <Hgrid />
            <Hgrid />
            <Hgrid />
            <Hgrid />
            <Hgrid />
            <Hgrid />
            <Hgrid />
            <Hgrid />
            <Hgrid />
            <Hgrid />
            <Hgrid />
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
      </div>
      <Hpagenation />
    </div>
  );
}
