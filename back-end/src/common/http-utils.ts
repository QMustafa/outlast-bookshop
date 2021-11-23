import { AxiosResponse } from "axios";
import { isEmpty } from "lodash";
import { Favorite } from "../favorite/favorite.interface";

const axios = require('axios');

export const get = async (url: string): Promise<any[]> => {
  let res: any[] = [];
  await axios.get(url, { "Content-Type": "application/json" })
    .then(function (response: AxiosResponse) {
      if (response.status === 200) {
        const dt = response.data;
        if (!isEmpty(dt) && dt.favoriteBooks) {
          res = dt.favoriteBooks;
        }
      }
    });
  return res;
}

export const put = async (url: string, body: Favorite[]): Promise<any[]> => {
  let res: any[] = [];
  await axios.put(url, { favoriteBooks: body }, { "Content-Type": "application/json" })
    .then(function (response: AxiosResponse) {
      if (response.status === 200) {
        res = response.data;
      }
    });
  return res;
}