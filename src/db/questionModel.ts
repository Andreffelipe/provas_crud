import { Schema, model } from "mongoose";

const schema = new Schema({
  utterance: { type: String, required: true },
  question: { type: Schema.Types.Mixed, required: true },
  answers: { type: Schema.Types.Mixed },
  correct_answer: { type: String },
  type: { type: String, required: true },
})

export default model("Question", schema)
