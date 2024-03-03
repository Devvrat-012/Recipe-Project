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


export const updateRecipe = async (req, res, next)=>{
  const recipe = await Recipe.findById(req.params.id);
  if(!recipe){
    next(errorHandller(404, "Recipe not found!"));
  }
  if(req.user !== recipe.userRef){
    next(errorHandller(403, "You can only update your own recipes!"));
  }
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new:true}
    );
    res.status(200).json(updatedRecipe);
  } catch (error) {
    next(error)
  }
}