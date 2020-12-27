import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { MemoryRouter, Route } from 'react-router';
import { Link } from 'react-router-dom';
import PaginationItem from '@material-ui/lab/PaginationItem';

export interface Page{
  postPerPage: number,
  totalPosts: number,
  paginate: string,
}

const useStyles = makeStyles((theme) => createStyles({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
      marginLeft: 350,
      float: 'center',
    },
  },
}));

export default function Hpagination(): JSX.Element {
  const classes = useStyles();

  return (
    <MemoryRouter initialEntries={['/health_management/inbox']} initialIndex={0}>
      <Route>
        {({ location }) => {
          const query = new URLSearchParams(location.search);
          const page = parseInt(query.get('page') || '1', 30);
          return (
            <Pagination
              className={classes.root}
              page={page}
              count={30}
              color="primary"
              renderItem={(item) => (
                <PaginationItem
                  component={Link}
                  to={`/health_management/inbox${item.page === 1 ? '' : `?page=${item.page}`}`}
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
