import { Schema, model } from "mongoose";

const schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  hash_identifier: { type: String, required: true, unique: true },
})

export default model("Candidate", schema)
