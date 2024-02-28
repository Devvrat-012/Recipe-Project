import express from 'express';
import { verifytToken } from '../utils/verifyUser.js';
import {updateUser} from '../controllers/user.controller.js'

const userRouter = express.Router();

userRouter.post('/update:id', verifytToken, updateUser);

export default userRouter;