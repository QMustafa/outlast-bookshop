import { BooksResponse, BookType, FavoriteResponse } from 'src/Api/Constants';
import { ActionType } from 'src/State/ActionTypes';

interface FetchBooks {
  type: ActionType.FETCH_BOOKS;
  payload?: any;
}

interface BooksFetched {
  type: ActionType.BOOKS_FETCHED;
  payload: BooksResponse;
  shouldReset: boolean;
}

interface FetchFavorites {
  type: ActionType.FETCH_FAVORITES;
  payload?: any
}

interface FavoritesFetched {
  type: ActionType.FAVORITES_FETCHED;
  payload: FavoriteResponse[];
}

interface UpdateFavoriteStatus {
  type: ActionType.UPDATE_FAVORITE_STATUS;
  payload: FavoriteResponse,
  isDelete?: boolean
}

interface FavoriteStatusUpdated {
  type: ActionType.FAVORITE_STATUS_UPDATED;
  payload?: FavoriteResponse;
}
interface FetchBook {
  type: ActionType.FETCH_BOOK;
  payload?: number;
}

interface BookFetched {
  type: ActionType.BOOK_FETCHED;
  payload: BookType;
}

interface BookSelected {
  type: ActionType.SELECT_BOOK;
  payload: number;
}

export type BookshopAction =
  | FetchBooks
  | BooksFetched
  | BookSelected
  | FetchBook
  | BookFetched
  | FetchFavorites
  | FavoritesFetched
  | UpdateFavoriteStatus
  | FavoriteStatusUpdated;
