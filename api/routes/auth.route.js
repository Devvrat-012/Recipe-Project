import express from 'express';
import { google, signIn, signOut, signUp } from '../controllers/auth.controller.js';

const authRouter = express.Router();

authRouter.post('/signUp', signUp);
authRouter.post('/signIn', signIn);
authRouter.post('/google', google);
authRouter.get('/signOut', signOut);

export default authRouter;