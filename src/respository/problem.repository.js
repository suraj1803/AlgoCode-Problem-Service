import { Problem } from "../models/index.js";

export class ProblemRepository {
  async createProblem(problemData) {
    const problem = await Problem.create({
      title: problemData.title,
      description: problemData.description,
      testCases: problemData.testCases ? problemData.testCases : [],
    });
    return problem;
  }

  async getAllProblems() {
    const problems = await Problem.find();
    return problems;
  }

  async getProblem(id) {
    const problem = await Problem.findById(id);
    return problem;
  }

  async deleteProblem(id) {
    const problem = await Problem.findByIdAndDelete(id);
    return problem;
  }
}
