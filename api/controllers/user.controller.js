import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandller } from "../utils/error.js";
import Recipe from '../models/recipe.model.js'

export const updateUser = async (req, res, next) => {
  if (req.user !== req.params.id)
    return next(errorHandller(401, "You can only update your own account!"));
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    );

    const { password, ...rest } = updatedUser._doc;

    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};


export const deleteUser = async (req, res, next)=>{
  if(req.user !== req.params.id){
    return next(errorHandller(401, 'You can only delete your own account!'));
  }
  try {
    const id = req.user;
    await User.findByIdAndDelete(id);
    res.clearCookie(('access_token'));
    res.status(200).json('User has been deleted!')
  } catch (error) {
    next(error)
  }
}


export const getUserRecipes = async (req, res, next) => {
  if (req.user === req.params.id) {
    try {
      const recipes = await Recipe.find({ userRef: req.params.id });
      res.status(200).json(recipes);
    } catch (error) {
      next(error);
    }
  } else {
    return next(errorHandller(401, 'You can only view your own recipes!'));
  }
};