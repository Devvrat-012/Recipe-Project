import express from 'express';
import { google, signIn, signUp } from '../controllers/auth.controller.js';

const authRouter = express.Router();

authRouter.post('/signUp', signUp);
authRouter.post('/signIn', signIn);
authRouter.post('/google', google)

export default authRouter;