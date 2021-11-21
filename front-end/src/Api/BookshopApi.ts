import axios from 'axios';
import { FETCH_BOOKS_API } from './Constants';

const fetchBooksApi = axios.create({
  baseURL: FETCH_BOOKS_API,
});

export default fetchBooksApi;
