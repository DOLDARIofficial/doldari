import React from 'react'
import useAxios from 'axios-hooks';

export default function Mainpage(): JSX.Element {
  const [data, executeGet] = useAxios({
    { url: '/test', method: 'post' }, { manual: true },
  });
  return (<div>
    
  </div>);
}