import React from 'react';
// import SharedPage from '../../organisms/shared/SharedPage';
import BooksWriteForm from '../../organisms/shared/BooksWriteForm';
import Appbar from '../../organisms/shared/Appbar';

export default function DetailPage(): JSX.Element {
  return (
    <div>
      <Appbar />
      <div style={{
        paddingTop: 200, display: 'flex', justifyContent: 'center',
      }}
      >
        {/* <SharedPage /> */}
        <BooksWriteForm />

      </div>
    </div>
  );
}
