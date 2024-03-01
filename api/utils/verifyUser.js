import { errorHandller } from "./error.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const verifytToken = (req, res, next) => {
  const cookieString = req.headers.cookie;
  const accessToken = cookieString.split('access_token=')[1];
  if (!accessToken) return next(errorHandller(401, "Unauthorized!"));

  jwt.verify(accessToken, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(errorHandller(403, "Forbidden!"));
    req.user = user.id;

    next();
  });
};




 // const token = req.headers.cookie;
  // if (!token) return next(errorHandller(401, "Unauthorized!"));
  // jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
  //   if (err) return next(errorHandller(403, "Forbidden!"));
  //   req.user = user;
  //   next();
  // });
