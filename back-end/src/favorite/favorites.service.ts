/**
 * Data Model Interfaces
 */

import { addNewFavorite, findAllFavorites, removeFavorite } from "./facorites.repository";
import { BaseFavorite, Favorite } from "./favorite.interface";


/**
 * Service Methods
 */

export const findAll = async (): Promise<Favorite[]> => findAllFavorites();

export const create = async (newFavorite: Favorite): Promise<Favorite> => addNewFavorite(newFavorite);

export const remove = async (id: number): Promise<void> => removeFavorite(id);

