import React from 'react';
import BooksList from '../../organisms/shared/BooksList';
import Appbar from '../../organisms/shared/Appbar';

export default function BookPage(): JSX.Element {
  return (
    <div>
      <Appbar />
      <div style={{
        paddingTop: 200, display: 'flex', justifyContent: 'center',
      }}
      >
        <BooksList />
      </div>
    </div>
  );
}
