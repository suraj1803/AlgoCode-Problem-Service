import express from "express";
import { problemRouter } from "./problems.router.js";

export const v1Router = express.Router();

v1Router.use("/problems", problemRouter);
