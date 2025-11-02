import { StatusCodes } from "http-status-codes";
import { NotImplemented } from "../errors/notImplemented.error.js";
import { BadRequest } from "../errors/badrequest.error.js";
export function pingProblemController(req, res) {
  res.json({ message: "Problem controller is up" });
}

export function addProblem(req, res, next) {
  try {
    throw new BadRequest("Problem Name", { missing: "Problem Name" });
  } catch (error) {
    next(error);
  }
}

export function getProblem(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not implemented",
  });
}

export function getProblems(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not implemented",
  });
}

export function deleteProblem(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not implemented",
  });
}

export function deleteProblems(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not implemented",
  });
}

export function updateProblem(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not implemented",
  });
}

export function updateProblems(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not implemented",
  });
}
