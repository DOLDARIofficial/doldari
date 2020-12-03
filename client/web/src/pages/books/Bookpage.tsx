import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import React from 'react';
import Appbar from '../../organisms/shared/Appbar';
import GridTool from '../../organisms/books/Contents';
import PaginationLink from '../../organisms/books/Bookpagenation';
import Tabbar from '../../organisms/shared/Tabbar';

export default function Books(): JSX.Element {
  return (
    <div style={{
      paddingRight: 100, paddingLeft: 100, paddingTop: 150, paddingBottom: 100, color: '#d0dcf5', justifyContent: 'center', alignItems: 'center',
    }}
    >
      <Tabbar />
      <Appbar />
      <Paper variant="outlined">
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
