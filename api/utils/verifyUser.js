import { errorHandller } from "./error.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const verifytToken = (req, res, next) => {
  const cookieString = req.headers.cookie;
  if (!cookieString) {
    return next(errorHandller(401, "Unauthorized!"));
  }
  const accessToken = cookieString
    .split("; ")
    .find((row) => row.startsWith("access_token="))
    ?.split("=")[1];
  if (!accessToken) return next(errorHandller(401, "Unauthorized!"));

  jwt.verify(accessToken, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(errorHandller(403, "Forbidden!"));
    req.user = user.id;

    next();
  });
};
