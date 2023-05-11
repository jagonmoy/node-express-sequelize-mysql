import express from 'express';
import {getAllusers} from '../controllers/userController.js'

const userRouter = express.Router();
userRouter.get('/',getAllusers)

export {
    userRouter 
}

