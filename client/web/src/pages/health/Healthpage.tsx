import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Hgrid from '../../organisms/health/Hgrid';
import Hpagenation from '../../organisms/health/Hpagenation';
import ButtonAppBar from '../../shared/Appbar';
import Htop from '../../organisms/health/Htop';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    maxWidth: 1200,
    marginTop : 150,
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

export default function Healthpage():JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <ButtonAppBar/>
    <Htop/>
      <div style={{width: '70%', margin: '30px auto'}}>
          <Paper className={classes.paper} variant="outlined">
          <Grid container spacing={2} >
            <Hgrid/><Hgrid/><Hgrid/><Hgrid/><Hgrid/><Hgrid/><Hgrid/><Hgrid/><Hgrid/><Hgrid/>
            <Hgrid/><Hgrid/><Hgrid/><Hgrid/><Hgrid/><Hgrid/><Hgrid/><Hgrid/><Hgrid/><Hgrid/>
          </Grid>
          </Paper>
      </div>
      <Hpagenation/>
    </div>
  );
}