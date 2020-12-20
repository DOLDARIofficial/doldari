import React from 'react';
import SharedPage from '../../organisms/shared/SharedPage';
import Appbar from '../../organisms/shared/Appbar';

export default function DetailPage(): JSX.Element {
  return (
    <div>
      <Appbar />
      <div style={{
        paddingTop: 200, display: 'flex', justifyContent: 'center',
      }}
      >
        <SharedPage />

      </div>
    </div>
  );
}
