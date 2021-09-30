
export class Question {
  utterance!: string
  question!: string
  answers!: string[]
  correct_answer!: string
  type!: string
  constructor(values: Question) {
    Object.assign(this, values)
  }
}
