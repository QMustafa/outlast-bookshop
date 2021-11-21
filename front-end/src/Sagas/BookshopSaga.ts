import { call, StrictEffect, takeEvery } from 'redux-saga/effects';
import { ActionType } from 'src/State/ActionTypes';
import fetchBooksApi from 'src/Api/BookshopApi'
import { AxiosResponse } from 'axios';
import { put } from '@redux-saga/core/effects';
import { BookshopAction } from 'src/State/Actions';

function* fetchBooksList(action: BookshopAction) {
    try {
        const queryParams = action.payload.queryParams;
        const response : AxiosResponse = yield call(fetchBooksApi.get, `?${queryParams}`);
        if(response.status === 200) {
            yield put({
                type: ActionType.BOOKS_FETCHED,
                payload: response.data,
                shouldReset: action.payload.shouldReset,
            });
        }

    } catch (err) {

    }
}

// this function is used if the link of one book was opened directly in the browser (without being redirected from the list page)
function* fetchBook(action: BookshopAction) {
    try {
        const response : AxiosResponse = yield call(fetchBooksApi.get, `/${action.payload || ""}`);
        if(response.status === 200) {
            yield put({
                type: ActionType.BOOK_FETCHED,
                payload: response.data,
            });
        }

    } catch (err) {

    }
}

//watchers
function* bookshopSaga() : Generator<StrictEffect> {
    yield takeEvery(ActionType.FETCH_BOOKS, fetchBooksList);
    yield takeEvery(ActionType.FETCH_BOOK, fetchBook);
};


export default bookshopSaga;