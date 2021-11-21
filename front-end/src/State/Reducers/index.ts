import { combineReducers } from 'redux';
import booksReducer from './BookReducer';

const reducers = combineReducers({
  books: booksReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
