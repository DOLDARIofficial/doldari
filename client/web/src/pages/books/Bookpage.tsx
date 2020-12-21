import Paper from '@material-ui/core/Paper';
import {
  Button, createStyles, Grid, makeStyles,
} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Appbar from '../../organisms/shared/Appbar';
import GridTool from '../../organisms/books/Contents';
import PaginationLink from '../../organisms/books/Bookpagenation';
// import Tabbar from '../../organisms/shared/Tabbar';

const useStyles = makeStyles(() => createStyles({
  transfer: {
    width: '190px',
    height: '80px',
    margin: '47px 36px 33px 364.4px',
    object: 'contain',
  },
  paper: {
    width: '1200px',
    height: '1320px',
    borderRadius: '40px',
    marginLeft: '80px',
  },
}));

export default function Books(): JSX.Element {
  const classes = useStyles();
  return (
    <div style={{
      paddingRight: 100, paddingLeft: 100, paddingTop: 100, paddingBottom: 100, color: '#d0dcf5', justifyContent: 'center', alignItems: 'center',
    }}
    >
      <Appbar />
      <Button style={{ marginLeft: 740 }} component={Link} to="/shared_page">
        <img src="/transfer.png" alt="?" className={classes.transfer} />
      </Button>
      <Paper variant="outlined" className={classes.paper}>
        <Grid container spacing={3} style={{ alignContent: 'center' }}>
          <GridTool />
          <GridTool />
          <GridTool />
          <GridTool />
        </Grid>
      </Paper>
      <Grid container style={{ paddingRight: 200, paddingLeft: 470, paddingTop: 20 }}>
        <PaginationLink />
      </Grid>
    </div>
  );
}
