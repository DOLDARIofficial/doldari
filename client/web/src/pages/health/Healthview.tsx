import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Appbar from '../../organisms/shared/Appbar';
import Htop from '../../organisms/health/Htop';

interface item {
  title: string;
  gps: string;
  period: string;
  price: number;
  date: number;
  content: string;
}

interface dataprops {
  data: item[];
}

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
    borderRadius: 40,
  },
  content: {
    paddingTop: 20,
    paddingBottom: 10,
    fontSize: 18,
  },
  image: {
    width: 160,
    height: 160,
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
    fontWeight: 'bold',
    color: '#F5A1A1',
    verticalAlign: 'middle',
    fontSize: 38,
    paddingTop: 18,
  },
  textw: {
    fontWeight: 'bold',
    color: '#a0a0a0',
    verticalAlign: 'middle',
    fontSize: 28,
    paddingTop: 25,
  },
  textmap: {
    color: '#d0dcf5',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 30,
  },
}));

const data = [{
  title: '(제목입니다) 북문 근처 헬스장 양도합니다!!',
  gps: '부산대학로 88번지',
  period: '21년 3월 24일 까지',
  price: 20000,
  date: '2020.11.22',
  content: '콘텐츠 내용 들어갑니다',
},
];

export default function HealthView(ItemData: dataprops): JSX.Element {
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
      <Appbar />
      <Htop />

      <Paper className={classes.paper} variant="outlined">
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="flex-start" spacing={2}>
              <Grid item>
                <Typography color="textSecondary">판매 등록일</Typography>
              </Grid>
              <Grid item>
                <Typography color="textSecondary">{data[0].date}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Typography variant="h5" style={{ paddingTop: 10, paddingBottom: 20 }}>{data[0].title}</Typography>
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <Grid container justify="flex-start" spacing={4}>
              <Grid item>
                <Typography color="textSecondary">위치</Typography>
              </Grid>
              <Grid item>
                <Typography>{data[0].gps}</Typography>
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
            <Grid container justify="flex-start" spacing={4}>
              <Grid item>
                <Typography color="textSecondary">기한</Typography>
              </Grid>
              <Grid item>
                <Typography>{data[0].period}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={2} justify="flex-end">
          <Grid item>
            <Typography className={classes.text}>{data[0].price}</Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.textw}>원</Typography>
          </Grid>
          <Grid item>
            <img src="/sale.png" alt="이미지" className={classes.img_s} />
          </Grid>
        </Grid>

        <Grid className={classes.content}>
          {data[0].content}
        </Grid>
        <div style={{ padding: 40 }}>
          <img className={classes.image} src="/s-img.png" alt="이미지" style={{ marginRight: 30 }} />
          <img className={classes.image} src="/s-img.png" alt="이미지" style={{ marginRight: 30 }} />
          <img className={classes.image} src="/s-img.png" alt="이미지" style={{ marginRight: 30 }} />
          <img className={classes.image} src="/s-img.png" alt="이미지" />
        </div>

        <Typography className={classes.textmap}>지도보기</Typography>
        <Typography style={{ fontWeight: 'bold' }}>
          <img src="/loca.png" alt="이미지" />
          부산대학교
        </Typography>
        <Typography color="textSecondary">부산광역시 금정구 부산대학로 63번길 2</Typography>
        <img src="/map.png" alt="이미지" />
      </Paper>

    </div>
  );
}
