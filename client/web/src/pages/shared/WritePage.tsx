import React from 'react';
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
        <BooksWriteForm />

      </div>
    </div>
  );
}
