import React from 'react';
//  useEffect, { useState }
import { Grid, Paper, makeStyles } from '@material-ui/core';
//   GridList,
// import Pagination from '@material-ui/lab/Pagination';
import Appbar from '../../organisms/shared/Appbar';
import Tabbar from '../../organisms/shared/Tabbar';
import ItemSet from '../../organisms/rooms/ItemSet';
import Paginate from '../../organisms/rooms/Pagenation';

// import CardForm from './Card';
// import useAxios from 'axios-hooks';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'white',
  },
  paper: {
    marginTop: '30px',
    borderRadius: '40px',
  },
  box: {
    width: '1200',
    marginTop: 30,
    paddingRight: theme.spacing(30),
    paddingLeft: theme.spacing(30),
  },
  card: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    margin: '10px',
  },
  paperAlgin: {
    margin: '50px',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  grid: {
    textAlign: 'center',
  },
  img: {
    width: 70,
    height: 120,
    marginTop: '150px',
    paddingRight: theme.spacing(30),
    paddingLeft: theme.spacing(170),
  },
}));

// const [page, setPage] = useState(1);
// const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
//   setPage(value);
// };

const dummy = [{
  roomId: 1,
  userId: 'a',
  content: '자취방 양도합니다',
  title: '제목:자취방 양도',
  createdAt: 'Dec 28, 2020 2:14 AM',
  locationCode: '12345',
  warrentyPrice: 0,
  price: 40,
},
{
  roomId: 2,
  userId: 'b',
  content: '자취방 2양도합니다',
  title: '제목:자취방 양도',
  createdAt: 'Dec 28, 2020 2:14 AM',
  locationCode: '12345',
  warrentyPrice: 0,
  price: 30,
},
{
  roomId: 3,
  userId: 'c',
  content: '자취방3 양도합니다',
  title: '제목:자취방 양도',
  createdAt: 'Dec 28, 2020 2:14 AM',
  locationCode: '12345',
  warrentyPrice: 0,
  price: 20,
},
{
  roomId: 4,
  userId: 'd',
  content: '자취방4 양도합니다',
  title: '제목:자취방 양도',
  createdAt: 'Dec 28, 2020 2:14 AM',
  locationCode: '12345',
  warrentyPrice: 0,
  price: 35,
},
{
  roomId: 5,
  userId: 'e',
  content: '자취방5 양도합니다',
  title: '제목:자취방 양도',
  createdAt: 'Dec 28, 2020 2:14 AM',
  locationCode: '12345',
  warrentyPrice: 0,
  price: 40,
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
      <div className={classes.img}>
        <Grid>
          <img alt="complex" src="transfer.png" />
        </Grid>
      </div>
      <div className={classes.paper}>
        <Paper elevation={0}>
          <ItemSet data={dummy} />
          <ItemSet data={dummy} />
          <ItemSet data={dummy} />
          <ItemSet data={dummy} />
        </Paper>
      </div>
      <div className="container">
        <Paginate />
        {/* <Pagination
          page={page}
          totalPages={totalPages}
          handlePagination={handlePages}
        /> */}
      </div>
    </>
  );
}

// export default function Roompage(): JSX.Element {
//   const classes = useStyles();
//   const [, excuteGet] = useAxios({ url: '/room', method: 'get' }, { manual: true });
//   const [data, setData] = useState<any>();
//   useEffect(() => {
//     excuteGet().then((res) => {
//       setData(res.data);
//     });
//   });
//   return (
//     <>
//       <Appbar />
//       <Tabbar />
//       <div className={classes.img}>
//         <Grid>
//           <img alt="complex" src="transfer.png" />
//         </Grid>
//       </div>
//       <div className={classes.box}>
//         <Paper style={{ width: '1300px', height: '1400px', borderRadius: '40px' }} elevation={0} className={classes.paperAlgin}>
//           <GridList cellHeight={160} className={classes.card} cols={2}>
//             {data?.map((v: any) => (
//               <CardForm
//                 roomId={v.roomId}
//                 createdAt={v.createdAt}
//                 title={v.title}
//                 warrentyPrice={v.warrentyPrice}
//                 userId={v.userId}
//                 content={v.content}
//                 locationCode={v.locationCode}
//               />
//             ))}
//           </GridList>
//         </Paper>
//       </div>
//       <div className="container" />
//     </>
//   );
// }
