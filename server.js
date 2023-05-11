import dotenv from 'dotenv';
import app from './app.js'
dotenv.config()
import {connectToDatabase} from './configs/dbConfig.js'

const port = process.env.PORT || 3010;
const host  = process.env.HOST || '127.0.0.1' ;

connectToDatabase();

app.listen(port, host , () => {
    console.log(host);
    console.log(`${port} is running`);
});