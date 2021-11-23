import { call, StrictEffect, takeEvery } from 'redux-saga/effects';
import { ActionType } from 'src/State/ActionTypes';
import { fetchBooksApi, favoritesApi } from 'src/Api/BookshopApi';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { put } from '@redux-saga/core/effects';
import { BookshopAction } from 'src/State/Actions';

function* fetchBooksList(action: BookshopAction) {
  try {
    const queryParams = action.payload.queryParams;
    const response: AxiosResponse = yield call(
      fetchBooksApi.get,
      `?${queryParams}`
    );
    if (response.status === 200) {
      yield put({
        type: ActionType.BOOKS_FETCHED,
        payload: response.data,
        shouldReset: action.payload.shouldReset,
      });

      yield put({
        type: ActionType.FETCH_FAVORITES
      });
    }
  } catch (err) {}
}

// this function is used if the link of one book was opened directly in the browser (without being redirected from the list page)
function* fetchBook(action: BookshopAction) {
  try {
    const response: AxiosResponse = yield call(
      fetchBooksApi.get,
      `/${action.payload || ''}`
    );
    if (response.status === 200) {
      yield put({
        type: ActionType.BOOK_FETCHED,
        payload: response.data,
      });
    }
  } catch (err) {}
}

function* fetchFavorites() {
  try {
    const response: AxiosResponse = yield call(favoritesApi.get, '');
    if (response.status === 200) {
      yield put({
        type: ActionType.FAVORITES_FETCHED,
        payload: response.data,
      });
    }
  } catch (err) {}
}

function* updateFavoriteStatus(action: any) {
  try {
    let response: AxiosResponse;
    const config: AxiosRequestConfig = {headers: {"Content-Type": "application/json"}}
    if(action.isDelete) {
      response = yield call(favoritesApi.delete, `/${action.payload?.id}`);
    } else {
      response = yield call(favoritesApi.post, '', action.payload, config);
    }
    if (response.status === 201 || response.status === 204) {
      yield put({
        type: ActionType.FETCH_FAVORITES,
      });
    }
  } catch (err) {}
}

//watchers
function* bookshopSaga(): Generator<StrictEffect> {
  yield takeEvery(ActionType.FETCH_BOOKS, fetchBooksList);
  yield takeEvery(ActionType.FETCH_BOOK, fetchBook);
  yield takeEvery(ActionType.FETCH_FAVORITES, fetchFavorites);
  yield takeEvery(ActionType.UPDATE_FAVORITE_STATUS, updateFavoriteStatus);
}

export default bookshopSaga;
