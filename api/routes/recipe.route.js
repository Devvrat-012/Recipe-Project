import express from "express";
import { verifytToken } from "../utils/verifyUser.js";
import { createRecipe, deleteRecipe } from "../controllers/recipe.controller.js";

const recipeRouter = express.Router();

recipeRouter.post("/createRecipe/:id", verifytToken, createRecipe);
recipeRouter.delete('/deleteRecipe/:id', verifytToken, deleteRecipe);

export default recipeRouter;
