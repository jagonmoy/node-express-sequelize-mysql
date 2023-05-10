require('dotenv').config()
const app = require('./app');
const dbconfig = require('./config/dbConfig')

const port = process.env.PORT || 3010;
const host  = process.env.HOST || '127.0.0.1' ;

dbconfig.connectToDatabase();

app.listen(port, host , () => {
    console.log(host);
    console.log(`${port} is running`);
});