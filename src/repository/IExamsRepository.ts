import { Question } from "../models/Questions";

export interface IExamsRepository {
  find (): Promise<Question[]>
  create (questions_ids: string[], candidate_id: string): Promise<void>
  findRandom (): Promise<void>
}
