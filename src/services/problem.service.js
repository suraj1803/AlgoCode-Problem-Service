import { sanitizeMarkdown } from "../utils/index.js";

export class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }

  async createProblem(problemData) {
    try {
      // 1. Sanitize the markdown
      problemData.description = sanitizeMarkdown(problemData.description);
      const problem = await this.problemRepository.createProblem(problemData);
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
