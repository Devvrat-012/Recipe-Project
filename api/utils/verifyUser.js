import {errorHandller} from './error.js';
import jwt from 'jsonwebtoken';

export const verifytToken = (req, res, next) =>{
    const token = req.cookie.access_token;
    if(!token) return next(errorHandller(401, 'Unauthorized!'));
    jwt.verify(token, process.env.JWT_SECRET, (err, user)=>{
        if(err) return next(errorHandller(403, 'Forbidden!'));
        req.user = user;
        next();
    });
}
