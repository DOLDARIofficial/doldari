import React /* { useEffect, useState } */ from 'react';
import { MemoryRouter, Route } from 'react-router';
import { Link } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';

export interface Page{
  postPerPage: number,
  totalPosts: number,
  paginate: string,
}

export default function PaginationLink(): JSX.Element {
  /*
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(16);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  */
  return (
    <MemoryRouter initialEntries={['/books/inbox']} initialIndex={0}>
      <Route>
        {({ location }) => {
          const query = new URLSearchParams(location.search);
          const page = parseInt(query.get('page') || '1', 30);
          return (
            <Pagination
              page={page}
              count={30}
              renderItem={(item) => (
                <PaginationItem
                  component={Link}
                  to={`/books/inbox${item.page === 1 ? '' : `?page=${item.page}`}`}
                  {...item}
                />
              )}
            />
          );
        }}
      </Route>
    </MemoryRouter>
  );
}
