import dotenv from 'dotenv';
import {Sequelize} from 'sequelize'
dotenv.config()

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        operatorsaliases: false,
        logging: console.log,
        define: {
          timestamps: true,
        },
    }
)
const connectToDatabase = async () => {
    try {
      await sequelize.authenticate();
      await sequelize.sync();
    } catch (error) {
      console.error('Dtabase Connection Failed: ', error.message);
    }
};
export {
    sequelize,
    connectToDatabase
}

