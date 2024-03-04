import express from "express";
import { verifytToken } from "../utils/verifyUser.js";
import { createRecipe, deleteRecipe, getRecipe, updateRecipe } from "../controllers/recipe.controller.js";

const recipeRouter = express.Router();

recipeRouter.post("/createRecipe/:id", verifytToken, createRecipe);
recipeRouter.delete('/deleteRecipe/:id', verifytToken, deleteRecipe);
recipeRouter.put('/updateRecipe/:id', verifytToken, updateRecipe);
recipeRouter.get('/get/:id', getRecipe);

export default recipeRouter;
