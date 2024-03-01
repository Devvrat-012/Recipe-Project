import express from 'express';
import { verifytToken } from '../utils/verifyUser.js';
import {deleteUser, updateUser} from '../controllers/user.controller.js'

const userRouter = express.Router();

userRouter.post('/update/:id', verifytToken, updateUser);
userRouter.delete('/delete/:id', verifytToken, deleteUser);

export default userRouter;
