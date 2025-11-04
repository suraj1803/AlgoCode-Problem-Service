import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT;
export const MONGO_URL = process.env.MONGO_URL;
export const NODE_ENV = process.env.NODE_ENV;
export const LOG_DB_URL = process.env.LOG_DB_URL;
