import React from 'react';
// import useAxios from 'axios-hooks';
import { Grid } from '@material-ui/core';
import SearchInput from '../../organisms/main/SearchInput';
import Appbar from '../../organisms/shared/Appbar';
import WordCloud from '../shared/WordCloud';
import useScrollTop from '../../util/hooks/useScrollTop';

export default function Mainpage(): JSX.Element {
  // const [data, executeGet] = useAxios(
  //   { url: '/test', method: 'get' }, { manual: true },
  // );
  useScrollTop();
  return (
    <div style={{ width: '100%' }}>
      <Appbar />
      <div style={{
        padding: 400, display: 'flex', justifyContent: 'left',
      }}
      >
        <Grid container>
          <Grid item xs={4}>
            <SearchInput />
          </Grid>
          <Grid item xs={8}>
            <WordCloud />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
