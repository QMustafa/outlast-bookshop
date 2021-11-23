import axios from 'axios';
import { FAVORITES_API, FETCH_BOOKS_API } from './Constants';

export const fetchBooksApi = axios.create({
  baseURL: FETCH_BOOKS_API,
});

export const favoritesApi = axios.create({
  baseURL: FAVORITES_API,
});

