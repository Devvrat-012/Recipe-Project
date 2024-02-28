import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import { errorHandller } from "../utils/error.js";

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandller(401, "You can only update your own accout!"));
  try {
    if (req.body.password) {
      const hashedPassword = bcryptjs.hashSync(req.body.password, 10);
      const updatedUser = await User.findByIdAndUpdate(req.params.id, {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: hashedPassword,
          avatar: req.body.avatar,
        },
      });
      const { password: pass, ...rest } = updatedUser._doc;
      res.status(200).json(rest);
    }
  } catch (error) {
    next(error);
  }
};
