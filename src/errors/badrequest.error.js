import { BaseError } from "./base.error.js";
import { StatusCodes } from "http-status-codes";

export class BadRequest extends BaseError {
  constructor(propertyName, details) {
    super(
      "BadRequest",
      StatusCodes.BAD_REQUEST,
      `Invalid structure from ${propertyName} provided`,
      details,
    );
  }
}
