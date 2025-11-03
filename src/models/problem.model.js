import mongoose from "mongoose";

const problemSchema = new mongoose.Schema({
  title: {
    type: String,
    requried: [true, "Title cannot be empty"],
  },
  description: {
    type: String,
    required: [true, "Description cannot be empty"],
  },
  diffculty: {
    trype: String,
    enum: ["easy", "medium", "hard"],
    required: [true, "diffculty cannot be empty"],
    default: "easy",
  },
  testCases: [
    {
      input: {
        type: String,
        required: [true, "input is required"],
      },
      output: {
        type: String,
        required: [true, "input is required"],
      },
    },
  ],
  editorial: {
    type: string,
  },
});

export const Problem = mongoose.model("Problem", problemSchema);
