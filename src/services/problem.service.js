import { NotFoundError } from "../errors/notfound.error.js";
import { sanitizeMarkdown } from "../utils/index.js";

export class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }

  async createProblem(problemData) {
    // 1. Sanitize the markdown
    problemData.description = sanitizeMarkdown(problemData.description);
    const problem = await this.problemRepository.createProblem(problemData);
    return problem;
  }

  async getAllProblems() {
    const problems = await this.problemRepository.getAllProblems();
    return problems;
  }

  async getProblem(id) {
    const problem = await this.problemRepository.getProblem(id);
    if (!problem) {
      throw new NotFoundError("Problem", "Id");
    }
    return problem;
  }

  async deleteProblem(id) {
    const problem = await this.problemRepository.deleteProblem(id);
    if (!problem) {
      throw new NotFoundError("Problem", "Id");
    }
    return problem;
  }
}
