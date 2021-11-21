import { Dispatch } from 'react';
import { BooksResponse } from 'src/Api/Constants';
import { BookshopAction } from './Actions';
import { ActionType } from './ActionTypes';

export const fetchBooks = (
  queryParam?: string,
  shouldReset: boolean = false
) => {
  return (dispach: Dispatch<BookshopAction>) => {
    dispach({
      type: ActionType.FETCH_BOOKS,
      payload: { shouldReset: shouldReset, queryParams: queryParam },
    });
  };
};

export const fetchBook = (bookId: number) => {
  return (dispach: Dispatch<BookshopAction>) => {
    dispach({
      type: ActionType.FETCH_BOOK,
      payload: bookId,
    });
  };
};
export const booksFetched = (
  books: BooksResponse,
  shouldReset: boolean = false
) => {
  return (dispach: Dispatch<BookshopAction>) => {
    dispach({
      type: ActionType.BOOKS_FETCHED,
      payload: books,
      shouldReset: shouldReset,
    });
  };
};

export const booksSelected = (bookId: number) => {
  return (dispach: Dispatch<BookshopAction>) => {
    dispach({
      type: ActionType.SELECT_BOOK,
      payload: bookId,
    });
  };
};
