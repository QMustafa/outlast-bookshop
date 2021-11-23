import { BooksResponse, BookType, FavoriteResponse } from 'src/Api/Constants';
import { BookshopAction } from 'src/State/Actions';
import { ActionType } from 'src/State/ActionTypes';

type StateType = {
  isLoading: boolean;
  books?: BooksResponse;
  favorites: FavoriteResponse[];
  selectedBook?: BookType;
};

const initialState: StateType = {
  isLoading: false,
  favorites: [],
  books: undefined,
  selectedBook: undefined,
};

const reducer = (state = initialState, action: BookshopAction): StateType => {
  switch (action.type) {
    case ActionType.FETCH_BOOKS:
      return { ...state, isLoading: true };
    case ActionType.BOOKS_FETCHED:
      const tempState =
        !state.books || action.shouldReset
          ? { ...state, isLoading: false, books: action.payload }
          : {
              ...state,
              isLoading: false,
              selectedBook: undefined,
              books: {
                ...action.payload,
                results: state.books.results.concat(action.payload.results),
              },
            };
      return tempState;
    case ActionType.SELECT_BOOK:
      return {
        ...state,
        selectedBook: state.books!.results.find((b) => b.id === action.payload),
      };
    case ActionType.FETCH_BOOK:
      return { ...state, isLoading: true };
    case ActionType.BOOK_FETCHED:
      return { ...state, isLoading: false, selectedBook: action.payload };
    case ActionType.FAVORITES_FETCHED:
      return { ...state, favorites: action.payload };
    default:
      return state;
  }
};

export default reducer;
