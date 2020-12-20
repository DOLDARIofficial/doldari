import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
// import { Pagination } from './Pagination';
// import axios from 'axios';
import Appbar from '../../organisms/shared/Appbar';
import Tabbar from '../../organisms/shared/Tabbar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    width: '100%',
    marginTop: '80px',
    paddingRight: theme.spacing(30),
    paddingLeft: theme.spacing(30),
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
  control: {
    padding: theme.spacing(2),
  },
}));

export default function HealthView(): JSX.Element {
  // const [spacing] = React.useState<GridSpacing>(2);
  const classes = useStyles();

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSpacing(Number((event.target as HTMLInputElement).value) as GridSpacing);
  // };

  return (
    <div>
      <Appbar />
      <Tabbar />
      <div className={classes.paper}>
        <Paper elevation={0}>
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="flex-start" spacing={2}>
                <Grid item>
                  <Typography color="textSecondary">판매 등록일</Typography>
                </Grid>
                <Grid item>
                  <Typography color="textSecondary">2020.11.22</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Typography variant="h5">(제목입니다) 자취방 양도합니다. *북문근처에요!!</Typography>
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="flex-start" spacing={2}>
                <Grid item>
                  <Typography>위치</Typography>
                </Grid>
                <Grid item>
                  <Typography>네버랜드 112동</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="flex-start" spacing={2}>
                <Grid item>
                  <Typography>계약기간</Typography>
                </Grid>
                <Grid item>
                  <Typography>21년 2월까지</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="flex-start" spacing={2}>
                <Grid item>
                  <Typography>보증금 유/무</Typography>
                </Grid>
                <Grid item>
                  <Typography>없음</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="flex-start" spacing={2}>
                <Grid item>
                  <Typography variant="h5">400,000원</Typography>
                </Grid>
                <Grid item>
                  <img src="/sale.png" alt="이미지" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid>
            설명, 밑에 사진도 넣을께요
          </Grid>
          <img src="/2.png" alt="이미지" />
          <Typography>지도보기</Typography>
          <Typography>
            <img src="/loca.png" alt="이미지" />
            부산대학교
          </Typography>
          <Typography>부산광역시 금정구 부산대학로 63번길 2</Typography>
          <img src="/map.png" alt="이미지" />
        </Paper>
      </div>
    </div>
  );
}
