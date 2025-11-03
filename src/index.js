import express from "express";
import { MONGO_URL, PORT } from "./config/server.config.js";
import bodyParser from "body-parser";
import { apiRouter } from "./routes/index.js";
import { BaseError } from "./errors/base.error.js";
import { errorHandler } from "./utils/errorHandler.js";
import { connectToDb } from "./config/db.config.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use("/api", apiRouter);

app.use(errorHandler);

app.listen(PORT, async () => {
  console.log(`Server started at PORT: ${PORT}`);
  await connectToDb();
  console.log(`Successfully connected to database`);
});
