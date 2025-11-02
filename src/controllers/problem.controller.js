import { NotImplemented } from "../errors/notImplemented.error.js";

export function pingProblemController(req, res) {
  res.json({ message: "Problem controller is up" });
}

export function addProblem(req, res, next) {
  try {
    throw new NotImplemented("Add Problem");
  } catch (error) {
    next(error);
  }
}

export function getProblem(req, res, next) {
  try {
    throw new NotImplemented("Get Problem");
  } catch (error) {
    next(error);
  }
}

export function getProblems(req, res, next) {
  try {
    throw new NotImplemented("Get Problems");
  } catch (error) {
    next(error);
  }
}

export function deleteProblem(req, res, next) {
  try {
    throw new NotImplemented("Delete Problem");
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
