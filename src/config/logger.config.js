import { MongoClient } from "mongodb";
import winston from "winston";
import "winston-mongodb";
import { LOG_DB_URL } from "./server.config.js";
const allowdTransports = [];

allowdTransports.push(
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp({
        format: "YYYY-MM-DD HH:mm:ss",
      }),
      winston.format.printf(
        (log) => `${log.timestamp} [${log.level}] : ${log.message}`,
      ),
    ),
  }),
);

allowdTransports.push(
  new winston.transports.MongoDB({
    level: "error",
    db: LOG_DB_URL,
    collection: "logs",
  }),
);

allowdTransports.push(
  new winston.transports.File({
    filename: "app.log",
  }),
);

export const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    winston.format.printf(
      (log) => `${log.timestamp} [${log.level}] : ${log.message}`,
    ),
  ),
  transports: allowdTransports,
});
