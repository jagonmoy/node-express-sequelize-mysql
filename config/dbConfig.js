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
      console.log('Connection has been established successfully.');
      await sequelize.sync();
      console.log('All models were synchronized successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error.message);
    }
};
export {
    sequelize,
    connectToDatabase
}

