/* 
*작성자 : 박상은
*작성일 : 2020.12.05
*내용 : 테스트페이지
데이터를 가져와 목록을 띄워줍니다.
*/

import React, { useEffect, useState } from 'react';
import { Paper, GridList } from '@material-ui/core';
import useAxios from 'axios-hooks';
import styles from '../style/bookWrite.style';
import CardForm from './Card';

export default function BooksList(): JSX.Element {
  const [, excuteGet] = useAxios({ url: '/books', method: 'get' }, { manual: true });
  const [data, setData] = useState<any>();
  useEffect(() => {
    excuteGet().then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  const classes = styles();
  return (

    <Paper
      style={{
        width: '1300px', height: '1400px', borderRadius: '40px',
      }}
      elevation={0}
      className={classes.paperAlgin}
    >
      <GridList cellHeight={160} className={classes.card} cols={2}>
        {data?.map((v: any) => (
          // <Typography>
          //   {v.title}
          // </Typography>
          <CardForm
            title={v.title}
            authors={v.authors}
            isbn={v.isbn}
            sale_price={v.sale_price}
            publisher={v.publisher}
            state={v.state}
            thumbnail={v.thumbnail}
          />
        ))}
      </GridList>
    </Paper>
  );
}
