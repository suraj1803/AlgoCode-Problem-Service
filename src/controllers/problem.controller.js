import { StatusCodes } from "http-status-codes";
export function pingProblemController(req, res) {
  res.json({ message: "Problem controller is up" });
}

export function addProblem(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not implemented",
  });
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
