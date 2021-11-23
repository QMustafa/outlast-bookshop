import { request } from "http";
import { isEmpty } from "lodash";
import { JSON_BASE_BUCKER_NAME, JSON_BASE_KEY_NAME, JSON_BASE_URL } from "../common/constants";
import { get, put } from "../common/http-utils";
import { BaseFavorite, Favorite } from "./favorite.interface";

export const findAllFavorites = async (): Promise<Favorite[]> => {
   const url = `${JSON_BASE_URL}/${JSON_BASE_BUCKER_NAME}/${JSON_BASE_KEY_NAME}`
   return get(url);
};


export const addNewFavorite = async (newFavorite: Favorite): Promise<Favorite> => {
   const allFavorites = await findAllFavorites();
   allFavorites.push(newFavorite);
   console.log(allFavorites);
   const url = `${JSON_BASE_URL}/${JSON_BASE_BUCKER_NAME}/${JSON_BASE_KEY_NAME}`
   put(url, allFavorites);
   return newFavorite;
};

export const removeFavorite = async (id: number): Promise<void> => {
   const allFavorites = await findAllFavorites();
   allFavorites.splice(allFavorites.findIndex(function (i) {
      return i.id === id;
   }), 1);
   const url = `${JSON_BASE_URL}/${JSON_BASE_BUCKER_NAME}/${JSON_BASE_KEY_NAME}`
   put(url, allFavorites);
};
