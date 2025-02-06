import {Sequelize} from "sequelize";
import {config} from "dotenv";

config()

const DB_HOST = process.env.DB_HOST
const DB_NAME = process.env.DB_NAME || ''
const DB_USER = process.env.DB_USER || ''
const DB_PASSWORD = process.env.DB_PASSWORD || ''
const DB_PORT = Number(process.env.DB_PORT)


export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'mysql',
    pool: {
        max: 20,
        min: 2,
        acquire: 30000,
        idle: 60000,
    },
    logging: true,
})
