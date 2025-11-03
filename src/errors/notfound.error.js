import { BaseError } from "./base.error.js";

export class NotFoundError extends BaseError {
  constructor(resourceName, resourceValue) {
    super(
      "Not Found Error",
      404,
      `The requested resource : ${resourceName} with value ${resourceValue} not found`,
      {
        resourceName,
        resourceValue,
      },
    );
  }
}
