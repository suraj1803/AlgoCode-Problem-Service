import express from "express";
import { ProblemController } from "../../controllers/index.js";

export const problemRouter = express.Router();

problemRouter.get("/ping", ProblemController.pingProblemController);

problemRouter.get("/:id", ProblemController.getProblem);

problemRouter.get("/", ProblemController.getProblems);

problemRouter.post("/", ProblemController.addProblem);

problemRouter.delete("/:id", ProblemController.deleteProblem);

problemRouter.patch("/:id", ProblemController.updateProblem);
