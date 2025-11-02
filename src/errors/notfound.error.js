import { BaseError } from "./BaseError.js";

export class NotFoundError extends BaseError {
  constructor(details) {
    super("Not Found Error", 404, "Resource not  found", details);
  }
}
