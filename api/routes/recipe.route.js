import express from 'express';
import { verifytToken } from '../utils/verifyUser.js';
import { createRecipe } from '../controllers/recipe.controller.js';

const recipeRouter = express.Router();

recipeRouter.post('/createRecipe', verifytToken, createRecipe);

export default recipeRouter;