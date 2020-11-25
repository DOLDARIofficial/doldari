import React from 'react';
import SharedPage from '../../organisms/shared/SharedPage';
import Appbar from '../../organisms/shared/Appbar';

export default function DetailPage(): JSX.Element {
  const state = true;
  return (
    <div>
      <Appbar state={state} />
      <div style={{
        paddingTop: 100, display: 'flex', justifyContent: 'center',
      }}
      >
        <SharedPage />

      </div>
    </div>
  );
}
