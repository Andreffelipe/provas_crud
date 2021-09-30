import { Schema, model } from "mongoose";

const schema = new Schema({
  questions_ids: { type: [String], required: true },
  hash_id: { type: String },
  answers: { type: Schema.Types.Mixed }
});

export default model("Exams", schema);
