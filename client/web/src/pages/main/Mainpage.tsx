import React from 'react';
// import useAxios from 'axios-hooks';
import SearchInput from '../../organisms/main/SearchInput';
import Appbar from '../../organisms/shared/Appbar';
import WordCloud from '../shared/WordCloud';

export default function Mainpage(): JSX.Element {
  // const [data, executeGet] = useAxios(
  //   { url: '/test', method: 'get' }, { manual: true },
  // );
  return (
    <div style={{ width: '100%' }}>
      <Appbar />
      <div style={{
        padding: 300, display: 'flex', justifyContent: 'left',
      }}
      >
        <SearchInput />
        <WordCloud />

      </div>
    </div>
  );
}
