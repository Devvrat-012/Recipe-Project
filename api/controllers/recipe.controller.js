import Recipe from "../models/recipe.model.js";
import { errorHandller } from "../utils/error.js";

export const createRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.create(req.body);
    return res.status(200).json(recipe);
  } catch (error) {
    next(error);
  }
};



export const deleteRecipe = async (req, res, next) => {

  const recipe = await Recipe.findById(req.params.id);
  if (!recipe) {
    return next(errorHandller(404, "Recipe not found!"));
  }
  console.log(recipe)
  if (req.user !== recipe.userRef) {
    next(errorHandller(403, "You can only delete your own recipes!"));
  }
  try {
    await Recipe.findByIdAndDelete(req.params.id);
    res.status(200).json("Listing has been deleted!");
  } catch (error) {
    next(error);
  }
};