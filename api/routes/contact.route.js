import express from 'express';
import { message } from '../controllers/contact.controller.js';

const contactRouter = express.Router();

contactRouter.post('/sendMessage/',  message);

export default contactRouter;