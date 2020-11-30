import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  makeStyles, createMuiTheme, ThemeProvider,
} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Appbar from '../../shared/Appbar';

const theme = createMuiTheme();

theme.typography.h3 = {
  fontSize: '30px',
  '@media (min-width:600px)': {
    fontSize: '33px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '30px',
  },
};
const useStyles = makeStyles(() => ({
  textprimary: {
    color: '#a0a0a0',
    fontSize: '15px',
    background: '#ffffff',
  },
  pricetext: {
    color: '#f5a1a1',
    fontSize: '24px',
  },
}));

export default function BookDetail(): JSX.Element {
  const classes = useStyles();
  return (
    <div style={{ color: 'primary', padding: 100, paddingTop: 150 }}>
      <Appbar />
      <Paper>
        <Grid container>
          <Typography variant="subtitle2" style={{ marginTop: 40, marginLeft: 55 }} className={classes.textprimary}>
            판매일자 2020.12.25
          </Typography>
        </Grid>
        <Grid container spacing={2} style={{ marginLeft: 50, marginTop: 1 }}>
          <Grid item>
            <Paper elevation={0}>
              <img src="https://ifh.cc/g/2JYFaB.jpg" width="200px" height="250px" alt="?" />
            </Paper>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <ThemeProvider theme={theme}>
                  <Typography variant="h3">문제해결을 위한 컴퓨팅 사고(이공 계열 전공자를 위한)</Typography>
                </ThemeProvider>
                <Typography className={classes.textprimary} style={{ marginTop: 10 }}>
                  저자 writer
                </Typography>
                <Typography className={classes.textprimary}>
                  출판사 publisher
                </Typography>
                <Typography className={classes.textprimary}>
                  거래방법
                  {' '}
                  <strong style={{ color: 'black' }}>직거래</strong>
                  {' '}
                  택배거래
                </Typography>
              </Grid>
              <Grid container>
                <Grid item xs={1}>
                  <Typography className={classes.pricetext} style={{ marginLeft: '10' }}>
                    <strong>19000</strong>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography>
                    <body style={{ color: 'gray' }}><del>21000</del></body>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ marginLeft: '50' }}>
          <Typography variant="h6" style={{ color: 'skyblue', fontFamily: 'delivery' }}>
            책상태
          </Typography>
        </Grid>
        <Grid container spacing={2}>
          <Grid item>
            <Paper elevation={0} style={{ marginLeft: '50' }} className={classes.textprimary}>
              <body>
                책 내부
                {' '}
                <strong>깨끗</strong>
                {' '}
                필기 밑줄
              </body>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
