import { BooksResponse, BookType } from "src/Api/Constants";
import { ActionType } from "src/State/ActionTypes";

interface FetchBooks {
    type: ActionType.FETCH_BOOKS;
    payload?: any;
}

interface BooksFetched {
    type: ActionType.BOOKS_FETCHED;
    payload: BooksResponse;
    shouldReset: boolean;
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

export type BookshopAction = FetchBooks | BooksFetched | BookSelected | FetchBook | BookFetched;