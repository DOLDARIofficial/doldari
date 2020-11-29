import axios from 'axios';

const Kakao = axios.create({
  baseURL: 'https://dapi.kakao.com',
  headers: {
    Authorization: 'KakaoAK 45d42122e98ac759a7bf1ecf6e3dee48',
  },
});

export const bookSearch = (params = {
  query: '파이썬',
  sort: 'accuracy',
  page: 1,
  size: 10,
}): any => Kakao.get('/v3/search/book?target=title', { params });
