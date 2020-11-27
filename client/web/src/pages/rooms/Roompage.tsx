import React from 'react';
// import Sidebar from '../../organisms/rooms/Sidebar';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import { Pagination } from './Pagination';
import ItemSet from '../../organisms/rooms/ItemSet';
import Appbar from '../../organisms/shared/Appbar';
import Tabbar from '../../organisms/shared/Tabbar';

// import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'white',
  },
  paper: {
    width: '100%',
    marginTop: '150px',
    paddingRight: theme.spacing(30),
    paddingLeft: theme.spacing(30),
  },
  grid: {
    textAlign: 'center',
  },
}));

const dummy = [{
  title: 'title0',
  content: 'content0',
  price: 100000,
},
{
  title: 'title1',
  content: 'content1',
  price: 100000,
},
{
  title: 'title2',
  content: 'content2',
  price: 200000,
},
{
  title: 'title3',
  content: 'content3',
  price: 300000,
},
{
  title: 'title1',
  content: 'content1',
  price: 100000,
},
];

export default function Roompage(): JSX.Element {
  const classes = useStyles();
  // SwiperCore.use([Navigation, Pagination, Autoplay]);
  // const [page, setPage] = useState(1);
  // const totalPages = 15;
  // const handlePages = (updatePage: number) => setPage(updatePage);

  return (
    <>
      <Appbar />
      <Tabbar />
      <div className={classes.paper}>
        <Paper elevation={0}>
          <ItemSet data={dummy} />
        </Paper>
      </div>
      <div className="container">
        {/* <Pagination
          page={page}
          totalPages={totalPages}
          handlePagination={handlePages}
        /> */}
      </div>
    </>
  );
}
