import Paper from '@material-ui/core/Paper';
import {
  Button, createStyles, Grid, makeStyles,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAxios from 'axios-hooks';
import Appbar from '../../organisms/shared/Appbar';
import BookContent from '../../organisms/books/Contents';
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
    marginLeft: '50px',
  },
}));

export default function Books(): JSX.Element {
  const classes = useStyles();
  const [{ loading, error, data }, excuteGet] = useAxios({ url: '/Books', method: 'get' }, { manual: true });
  console.log(loading, error, data);
  const [userData, setUserData] = useState<any>();
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  /*
  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now());
  }; */
  useEffect(() => {
    excuteGet().then((response) => {
      console.log(response.data);
      setUserData(response.data);
      setState({
        ...state,
        loading: false,
        data,
      });
    });
    /*
    .catch((err) => {
      setState({ ...state, loading: false, error });
    });
    */
  }, []);

  return (
    <div style={{
      paddingRight: 100,
      paddingLeft: 100,
      paddingTop: 100,
      paddingBottom: 100,
      color: '#d0dcf5',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <Appbar />
      <Button style={{ marginLeft: 700 }} component={Link} to="/shared_page">
        <img src="/transfer.png" alt="?" className={classes.transfer} />
      </Button>
      <Paper variant="outlined" className={classes.paper}>
        <Grid container spacing={3} style={{ alignContent: 'center' }}>
          {userData?.map((v: any) => (
            <BookContent
              title={v.title}
              authors={v.authors}
              sale_price={v.sale_price}
              publisher={v.publisher}
              thumbnail={v.thumbnail}
            />
          ))}
        </Grid>
      </Paper>
      <Grid container style={{ paddingRight: 200, paddingLeft: 470, paddingTop: 20 }}>
        <PaginationLink />
      </Grid>
    </div>
  ); // return { ...state, refetch };
}
