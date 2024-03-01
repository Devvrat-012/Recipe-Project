import Recipe from "../models/recipe.model.js";

export const createRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.create(req.body);
    return res.status(200).json(recipe);
  } catch (error) {
    next(error);
  }
};
