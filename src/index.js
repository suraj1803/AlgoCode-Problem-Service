import express from "express";
import { PORT } from "./config/server.config.js";
import bodyParser from "body-parser";
import { apiRouter } from "./routes/index.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Server started at PORT: ${PORT}`);
});
