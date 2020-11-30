import React from 'react';
// import useAxios from 'axios-hooks';
import SearchInput from '../../organisms/main/SearchInput';
import Appbar from '../../organisms/shared/Appbar';

export default function Mainpage(): JSX.Element {
  // const [data, executeGet] = useAxios(
  //   { url: '/test', method: 'get' }, { manual: true },
  // );
  return (
    <div>
      <Appbar />
      <div style={{
        padding: 300, display: 'flex', justifyContent: 'left',
      }}
      >
        <SearchInput />

      </div>
    </div>
  );
}
