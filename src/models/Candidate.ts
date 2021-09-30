import { v4 as uuid } from "uuid";

export class Candidate {
  name: string
  email: string
  hash_identifier: string
  constructor(name: string, email: string) {
    this.hash_identifier = uuid(),
      this.name = name,
      this.email = email
  }
}
