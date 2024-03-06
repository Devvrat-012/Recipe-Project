import express from "express";
import { verifytToken } from "../utils/verifyUser.js";
import { createRecipe, deleteRecipe, getRecipes, getUserRecipe, updateRecipe } from "../controllers/recipe.controller.js";

const recipeRouter = express.Router();

recipeRouter.post("/createRecipe/:id", verifytToken, createRecipe);
recipeRouter.delete('/deleteRecipe/:id', verifytToken, deleteRecipe);
recipeRouter.put('/updateRecipe/:id', verifytToken, updateRecipe);
recipeRouter.get('/get/:id', getUserRecipe);
recipeRouter.get('/getRecipes', getRecipes);

export default recipeRouter;
