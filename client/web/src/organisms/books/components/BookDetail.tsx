import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  makeStyles, createMuiTheme, ThemeProvider, createStyles,
} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { Button } from '@material-ui/core';
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
const useStyles = makeStyles(() => createStyles({
  textprimary: {
    color: '#a0a0a0',
    fontSize: '15px',
  },
  pricetext: {
    color: '#f5a1a1',
    fontSize: '24px',
  },
  solution: {
    width: '1320px',
    height: '365px',
    marginTop: '40px',
    borderRadius: '40px',
  },
  paper: {
    width: '1320px',
    height: '900px',
    padding: '40px',
    borderRadius: '40px',
  },
}));

export default function BookDetail(): JSX.Element {
  const classes = useStyles();
  return (
    <div style={{ color: 'primary', padding: 100, paddingTop: 150 }}>
      <Appbar />
      <Paper className={classes.paper}>
        <Grid container>
          <Typography variant="subtitle2" style={{ marginTop: 40, marginLeft: 55 }} className={classes.textprimary}>
            판매일자 2020.12.25
          </Typography>
        </Grid>
        <Grid container spacing={2} style={{ marginLeft: 50, marginTop: 1 }}>
          <Grid item>
            <Paper elevation={0}>
              <img src="/bookimg.jpg" width="200px" height="250px" alt="?" />
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
                  <Typography className={classes.pricetext} style={{ marginLeft: 10 }}>
                    <strong>19000</strong>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography>
                    <p style={{ color: 'gray' }}><del>21000</del></p>
                  </Typography>
                </Grid>
                <Grid item>
                  <Button>
                    <img src="/sale.png" height="30" alt="?" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container style={{ paddingLeft: 70, paddingTop: 20 }}>
          <Grid item>
            <Typography variant="h6" style={{ color: 'skyblue', fontFamily: 'delivery', marginLeft: '50' }}>
              책상태
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item>
            <Paper elevation={0} style={{ marginLeft: 100 }}>
              <p>
                책 내부
                {' '}
                <strong>깨끗</strong>
                {' '}
                필기
                {' '}
                밑줄
              </p>
              <p>
                책 외부
                {' '}
                깨끗
                {' '}
                <strong>이름기입</strong>
                {' '}
                <strong>변색</strong>
                {' '}
                <strong>훼손</strong>
              </p>
              <p>
                <br />
                필기 및 밑줄 없고, 표지도 깨끗합니다!
                <br />
                아직 사용하지 않은 새 책 입니다
                <br />
                사용감 1도 없음
                <br />
                깨끗하니 좀 비싸도 이해바람
                <br />
                내가 그지라서 그럼..
              </p>
              <Grid container xs={12} alignContent="flex-end" style={{ paddingTop: 10 }}>
                <Grid
                  item
                  style={{
                    width: 250, height: 250, marginLeft: 50,
                  }}
                >
                  <img src="/bookimg.jpg" alt="?" />
                </Grid>
                <Grid item style={{ width: 250, height: 250, marginLeft: 3 }}>
                  <img src="/bookimg.jpg" alt="?" />
                </Grid>
                <Grid item style={{ width: 250, height: 250, marginLeft: 3 }}>
                  <img src="/bookimg.jpg" alt="?" />
                </Grid>
                <Grid item>
                  <img src="/bookimg.jpg" alt="?" />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.solution}>
        <Grid container>
          <Paper>
            <Typography>
              1. solution 1
            </Typography>
            <Typography>
              2. solution 2
            </Typography>
          </Paper>
        </Grid>
      </Paper>
    </div>
  );
}
