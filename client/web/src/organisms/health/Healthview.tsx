import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import { GridSpacing } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// import ButtonBase from '@material-ui/core/ButtonBase';
// import Hgrid from '../../organisms/health/Hgrid';
// import Hpagenation from '../../organisms/health/Hpagenation';
import ButtonAppBar from '../../shared/Appbar';
import Htop from './Htop';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    paddingTop: 60,
    paddingBottom: 60,
    paddingLeft: 100,
    paddingRight: 100,
    maxWidth: 1200,
    marginTop: 150,
  },
  image: {
    width: 200,
    height: 200,
  },
  img: {
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  control: {
    padding: theme.spacing(2),
  },
  img_s: {
    width: 150,

  },
  text: {
    textAlign: 'right',
    fontWeight: 'bold',
    color: '#F5A1A1',
    verticalAlign: 'middle',
    fontSize: 25,
    marginTop: 30,
  },
}));

export default function HealthView(): JSX.Element {
  // const [spacing] = React.useState<GridSpacing>(2);
  const classes = useStyles();

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSpacing(Number((event.target as HTMLInputElement).value) as GridSpacing);
  // };

  return (
    <div style={{
      paddingRight: 100, paddingLeft: 220, paddingTop: 100, color: '#d0dcf5',
    }}
    >
      <ButtonAppBar />
      <Htop />

      <Paper className={classes.paper} variant="outlined">
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
        <Typography variant="h5" style={{ paddingTop: 10, paddingBottom: 20 }}>(제목입니다) 헬스장 양도합니다. *북문근처에요!!</Typography>
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <Grid container justify="flex-start" spacing={2}>
              <Grid item>
                <Typography color="textSecondary">위치</Typography>
              </Grid>
              <Grid item>
                <Typography>네버랜드 112동</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <Grid container justify="flex-start" spacing={2}>
              <Grid item>
                <Typography color="textSecondary">양도금</Typography>
              </Grid>
              <Grid item>
                <Typography>없음</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <Grid container justify="flex-start" spacing={2}>
              <Grid item>
                <Typography color="textSecondary">기한</Typography>
              </Grid>
              <Grid item>
                <Typography>3개월</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={2} style={{ }}>
          <Grid item>
            <Typography className={classes.text}>2000원</Typography>
          </Grid>
          <Grid item>
            <img src="/sale.png" alt="이미지" className={classes.img_s} />
          </Grid>
        </Grid>

        <Grid style={{ paddingTop: 20, paddingBottom: 10 }}>
          콘텐츠 내용 들어갑니다
        </Grid>
        <div style={{ padding: 40 }}>
          <img className={classes.image} src="/s-img.png" alt="이미지" style={{ marginRight: 30 }} />
          <img className={classes.image} src="/s-img.png" alt="이미지" style={{ marginRight: 30 }} />
          <img className={classes.image} src="/s-img.png" alt="이미지" style={{ marginRight: 30 }} />
          <img className={classes.image} src="/s-img.png" alt="이미지" />
        </div>

        <Typography>지도보기</Typography>
        <Typography>
          <img src="/loca.png" alt="이미지" />
          부산대학교
        </Typography>
        <Typography>부산광역시 금정구 부산대학로 63번길 2</Typography>
        <img src="/map.png" alt="이미지" />
      </Paper>

    </div>
  );
}
