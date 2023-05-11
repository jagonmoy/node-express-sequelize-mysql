import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import {userRouter} from './routes/userRoutes.js'
import {authRouter} from './routes/authRoutes.js'

const app = express();

app.use(express.json());
app.use(
    cors({
      credentials: true,
      origin: process.env.FRONTEND_URL,
      allowedHeaders: '*'
    })
  );
app.use(morgan('dev'));

app.get('/',(req,res) => {
    return res.json({message: 'hi'})
})
app.use('/api/v1/users',userRouter)
app.use('/api/v1/auth',authRouter)



export default app ;