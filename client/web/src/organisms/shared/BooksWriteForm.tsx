/* 
*작성자 : 박상은
*작성일 : 2020.12.05
*내용 : 책방페이지의 글쓰기 기능
*1. isbn코드혹은 책제목입력시 kakao open api에 데이터를 요청하여
*책의 정보목록을 가져온다
*2. 1번의 데이터와 사용자가 입력한 책의 상태, 설명, 판메가격에대한 데이터를 db에 post하는기능을 수행합니다.
*/

import React from 'react';
import {
  TextField, Grid, Typography, Paper, Button,
  List, ListItem, ListItemText, Collapse,
} from '@material-ui/core';
import useAxios from 'axios-hooks';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import Checkboxes from './Checkboxes';
import styles from '../style/bookWrite.style';

export interface Book{
  id?: number;
  title: string;
  authors: string;
  translators: string;
  contents: string;
  description?: string;
  userId?: string;
  createdAt: string;
  isbn: number;
  url: string;
  state?: string;
  thumbnail: string;
  publisher: string;
  price?: number;
  datetime: string;
  sale_price: number;
}

const dummy = {
  title: '',
  contents: '',
  translators: '',
  price: 0,
  id: -1,
  publisher: '',
  authors: '',
  isbn: 0,
  thumbnail: '',
  url: '',
  userId: '',
  state: '',
  description: '',
  datetime: '',
  sale_price: 0,
};

export default function BooksWriteForm(): JSX.Element {
  const classes = styles();
  const [, executePost] = useAxios(
    { url: '/books', method: 'post' }, { manual: true },
  );
  const history = useHistory();
  const [query, setQuery] = React.useState(' ');

  const [bookList, setList] = React.useState([]);

  const [searchData, executeGet] = useAxios(
    { url: 'https://dapi.kakao.com/v3/search/book?target=title', headers: { Authorization: 'KakaoAK 1ce3f349d77a34fc0439b421bceafbc9' }, method: 'get' }, { manual: true },
  );
  const [value, setValue] = React.useState('ISBN 또는 책이름 검색...');

  const [selectedData, setSelectedData] = React.useState(dummy);

  const handleState = (event: any) => {
    setSelectedData({ ...selectedData, state: '필기, 밑줄' });
  };

  const handleContents = (event: any) => {
    setSelectedData({ ...selectedData, description: event.target.value });
  };

  const handlePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedData({ ...selectedData, sale_price: Number(event.target.value) });
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const param: string = event.target.value;
    setValue(param);
    setQuery(param);
    if (param !== '') {
      executeGet({ params: { query } }).then(() => {
        setList(searchData.data.documents);
      }).then().catch((err) => {
        console.log(err);
      });
    } else setList([]);
  };

  const handleBookData = (v: any) => {
    const data: any = bookList.find((book: any) => book.title === v.target.innerHTML);
    if (data) {
      setSelectedData(data);
      setValue(data.title);
      setList([]);
      console.log(selectedData);
    }
  };

  // 글을 post 하는 handler
  function handlePost() {
    console.log(selectedData);
    const data: any = {
      price: selectedData.price,
      sale_price: selectedData.sale_price,
      title: selectedData.title,
      contents: selectedData.contents,
      datetime: selectedData.datetime,
      isbn: selectedData.isbn,
      thumbnail: selectedData.thumbnail,
      authors: selectedData.authors[0],
      publisher: selectedData.publisher,
      url: selectedData.url,
      state: selectedData.state,
      translators: selectedData.translators[0],
      userId: 'testtest',
      createdAt: moment(new Date()).format('lll'),
      description: selectedData.description,
    };
    executePost({ data }).then().catch((err) => {
      console.log(err.message);
      console.log(data);
    }).then(() => {
      history.push('/books');
    });
  }

  return (
    <Paper
      style={{
        width: '1200px', height: '800px', borderRadius: '40px',
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
            <div className={classes.search}>
              <TextField
                onChange={handleSearch}
                className={classes.inputRoot}
                value={value}
              />
              <img src="/i_search@3x.png" alt="search" style={{ width: 30, height: 30 }} />
            </div>
            <div className={classes.root}>
              {bookList.length > 0 ? (
                <List>
                  <Collapse in timeout="auto" unmountOnExit>
                    {bookList.map((option: any, index) => (
                      <ListItem button divider onClick={handleBookData}>
                        <ListItemText primary={option.title} />
                      </ListItem>
                    ))}
                  </Collapse>
                </List>
              ) : null}
            </div>
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
