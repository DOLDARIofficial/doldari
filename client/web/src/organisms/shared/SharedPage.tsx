import React from 'react';
// import useAxios from 'axios-hooks';
import {
  TextField, Grid, Typography, InputBase, makeStyles, fade, Paper, Button,
} from '@material-ui/core';
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import useAxios from 'axios-hooks';
import moment from 'moment';
import Checkboxes from './Checkboxes';

// import { Room } from '../../../../../server/src/resource/room/interfaces/room.interface';

export interface Room{
  roomId: number;
  createdAt: number;
  name: string;
  price: number;
  content: string;
  userId: string;
  state: string;
}
const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: '#ffffff',

    display: 'flex',
    flexWrap: 'wrap',
    borderRadius: '40px',
    '& > *': {
      margin: theme.spacing(40),
      width: theme.spacing(50),
      height: theme.spacing(10),
    },
  },
  font: {
    fontSize: 30,

  },
  bluefont: {
    color: '#87abf5',
  },
  confirmButton: {
    backgroundColor: '#f5a1a1',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  listbox: {
    width: 200,
    margin: 0,
    padding: 0,
    zIndex: 1,
    position: 'absolute',
    listStyle: 'none',
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto',
    maxHeight: 200,
    border: '1px solid rgba(0,0,0,.25)',
    '& li[data-focus="true"]': {
      backgroundColor: '#4a8df6',
      color: 'white',
      cursor: 'pointer',
    },
    '& li:active': {
      backgroundColor: '#2977f5',
      color: 'white',
    },
  },
}));

const dummy = [
  { title: '책', year: null },
];

export default function SharedPage(): JSX.Element {
  const [, executePost] = useAxios(
    { url: '/books', method: 'post' }, { manual: true },
  );
  const [query, setQuery] = React.useState(' ');

  const [bookList, setList] = React.useState(dummy);

  const [searchData, executeGet] = useAxios(
    { url: 'https://dapi.kakao.com/v3/search/book?target=title', headers: { Authorization: 'KakaoAK 1ce3f349d77a34fc0439b421bceafbc9' }, method: 'get' }, { manual: true },
  );

  /* 
     자동완성 검색을 위한 훅입니다.
  */
  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: 'use-autocomplete-demo',
    options: bookList,
    getOptionLabel: (option: any) => option.title,
  });
  // React.useEffect(() => {

  // }, [bookList]);

  // const authContext = React.useContext();
  const [dataSource, setDataSource] = React.useState<Pick<Room, 'name' | 'price' | 'content'| 'state'>>({
    name: '',
    price: 0,
    content: '',
    state: '정상',
  });

  // // 각 데이터를 저장하는 handler함수들
  // const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setDataSource({ ...dataSource, name: event.target.value });
  // };

  const handleState = (event: any) => {
    setDataSource({ ...dataSource, state: '' });
  };

  const handleContents = (event: any) => {
    setDataSource({ ...dataSource, content: event.target.value });
  };

  const handlePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDataSource({ ...dataSource, price: Number(event.target.value) });
  };

  // 글을 post 하는 handler
  function handlePost() {
    const data: any = {
      ...dataSource,
      userId: 'testtest',
      createdAt: moment(new Date()).format('lll'),
      roomId: 1,
    };
    executePost({ data: dataSource }).then().catch((err) => {
      console.log(err.message);
      console.log(data);
    });
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const param: string = event.target.value;
    setQuery(param);
    if (param !== '') {
      console.log(param);
      executeGet({ params: { query } }).then(() => {
        setList(searchData.data.documents);
        console.log(bookList);
      }).catch((err) => {
        console.log(err.message);
      });
    }
  };

  const classes = useStyles();
  return (
    <Paper
      style={{
        width: '80%', height: '100%', borderRadius: '40px',
      }}
      elevation={0}
    >
      <Grid container style={{ padding: 80 }}>
        <Grid item xs={12} style={{ paddingBottom: 30, position: 'relative' }}>
          <Typography style={{ fontSize: 30 }}>
            판매 하기
          </Typography>
        </Grid>

        <Grid item xs={1} style={{ paddingBottom: 30, justifyContent: 'left' }}>
          <Typography style={{ fontSize: 20 }}>
            판매할 책
          </Typography>
        </Grid>

        <Grid item xs={11} style={{ paddingBottom: 30, justifyContent: 'left' }}>
          <div>
            <div className={classes.search} {...getRootProps()}>
              <InputBase
                placeholder="ISBN 또는 책이름 검색..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleSearch}
                {...getInputProps()}
              />
              <img src="/i_search@3x.png" alt="search" style={{ width: 30, height: 30 }} />
            </div>
            {groupedOptions.length > 0 ? (
              <ul className={classes.listbox} {...getListboxProps()}>
                {groupedOptions.map((option: any, index) => (
                  <li {...getOptionProps({ option, index })}>{option.title}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </Grid>

        <Grid item xs={1} style={{ paddingBottom: 10, justifyContent: 'left' }}>
          <Typography variant="h6" className={classes.bluefont}>
            책상태
          </Typography>
        </Grid>

        <Checkboxes title="책 내부" handleState={handleState} />
        {/* <Checkboxes title="책 외부" handleState={handleState}/>
        <Checkboxes title="거래방법" handleState={handleState}/> */}

        <Grid item xs={1} style={{ paddingTop: 30, paddingBottom: 10, justifyContent: 'left' }}>
          <Typography variant="h6" className={classes.bluefont}>
            추가설명
          </Typography>
        </Grid>

        <Grid item xs={12} style={{ paddingLeft: 20, paddingBottom: 10 }}>
          <TextField
            id="outlined-multiline-static"
            style={{ width: '100%' }}
            multiline
            rows={4}
            defaultValue="추가설명을 적어주세요."
            variant="outlined"
            onChange={handleContents}
            fullWidth
          />
          {/* <input id="outlined" style={{ width: '100%' }} /> */}
        </Grid>

        <Grid container style={{ paddingTop: 30, paddingBottom: 5 }}>
          <Grid item xs={2}>
            <Typography variant="h6" className={classes.bluefont}>
              판매할 가격
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="standard-number"
              onChange={handlePrice}
            />
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h6" className={classes.bluefont}>
              원
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} style={{ paddingLeft: 500, paddingBottom: 5 }}>
        <Typography style={{ fontSize: 15 }}>
          거래시 발생하는 개인정보 열람(연락처 공개)에 동의하십니까?
        </Typography>
      </Grid>

      <Grid item style={{ paddingLeft: 600, paddingBottom: 10, justifyContent: 'center' }}>
        <Button className={classes.confirmButton} variant="contained" onClick={handlePost}>
          판매하기
        </Button>
      </Grid>

    </Paper>
  );
}
