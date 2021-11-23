/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";
import * as FavoriteService from "./favorites.service";
import { BaseFavorite, Favorite } from "./favorite.interface";
/**
 * Router Definition
 */
export const favoritesRouter = express.Router();

/**
 * Controller Definitions
 */

// GET Favorites

favoritesRouter.get("/", async (req: Request, res: Response) => {
  try {
    const favorites: Favorite[] = await FavoriteService.findAll();

    res.status(200).send(favorites);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

// POST Favorite

favoritesRouter.post("/", async (req: Request, res: Response) => {
  try {
    const favorite: Favorite = req.body;

    const newFavorite = await FavoriteService.create(favorite);

    res.status(201).json(newFavorite);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

// DELETE favorites/:id

favoritesRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    await FavoriteService.remove(id);

    res.sendStatus(204);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});