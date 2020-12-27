import React, { useEffect, useState } from 'react';
import {
  makeStyles, Grid, Paper, GridList,
} from '@material-ui/core';
//   Typography,
import useAxios from 'axios-hooks';
import Appbar from '../../organisms/shared/Appbar';
import Tabbar from '../../organisms/shared/Tabbar';
import CardForm from './Card';

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
  box: {
    width: '1200',
    marginTop: 30,
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
  card: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    margin: '10px',
  },
  paperAlgin: {
    margin: '50px',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default function Roompage(): JSX.Element {
  const classes = useStyles();
  const [, excuteGet] = useAxios({ url: '/room', method: 'get' }, { manual: true });
  const [data, setData] = useState<any>();
  useEffect(() => {
    excuteGet().then((res) => {
      setData(res.data);
    });
  });
  return (
    <>
      <Appbar />
      <Tabbar />
      <div className={classes.img}>
        <Grid>
          <img alt="complex" src="transfer.png" />
        </Grid>
      </div>
      <div className={classes.box}>
        <Paper style={{ width: '1300px', height: '1400px', borderRadius: '40px' }} elevation={0} className={classes.paperAlgin}>
          <GridList cellHeight={160} className={classes.card} cols={2}>
            {data?.map((v: any) => (
              <CardForm
                roomId={v.roomId}
                createdAt={v.createdAt}
                title={v.title}
                warrentyPrice={v.warrentyPrice}
                userId={v.userId}
                content={v.content}
                locationCode={v.locationCode}
              />
            ))}
          </GridList>
        </Paper>
      </div>
      <div className="container" />
    </>
  );
}
