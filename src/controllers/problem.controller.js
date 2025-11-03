import { StatusCodes } from "http-status-codes";
import { NotImplemented } from "../errors/notImplemented.error.js";
import { ProblemRepository } from "../respository/index.js";
import { ProblemService } from "../services/index.js";

const problemService = new ProblemService(new ProblemRepository());

export function pingProblemController(req, res) {
  res.json({ message: "Problem controller is up" });
}

export async function addProblem(req, res, next) {
  try {
    const newProblem = await problemService.createProblem(req.body);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Succcessfully created a new problem",
      error: {},
      data: newProblem,
    });
  } catch (error) {
    next(error);
  }
}

export async function getProblem(req, res, next) {
  try {
    const problem = await problemService.getProblem(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Succcessfully fetched a problem",
      error: {},
      data: problem,
    });
  } catch (error) {
    next(error);
  }
}

export async function getProblems(req, res, next) {
  try {
    const problems = await problemService.getAllProblems();
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Succcessfully fetched all the problems",
      error: {},
      data: problems,
    });
  } catch (error) {
    next(error);
  }
}

export async function deleteProblem(req, res, next) {
  try {
    const problem = await problemService.deleteProblem(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Succcessfully deleted a problem",
      error: {},
      data: problem,
    });
  } catch (error) {
    next(error);
  }
}

export function deleteProblems(req, res, next) {
  try {
    throw new NotImplemented("Delete Problems");
  } catch (error) {
    next(error);
  }
}

export function updateProblem(req, res, next) {
  try {
    throw new NotImplemented("Update Problem");
  } catch (error) {
    next(error);
  }
}

export function updateProblems(req, res, next) {
  try {
    throw new NotImplemented("Update Problems");
  } catch (error) {
    next(error);
  }
}
