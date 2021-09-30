import { Question } from "../models/Questions";

export interface IQuestionRepository {
  create (question: Question): Promise<void>;
  read (): Promise<any>;
  update (id: string, question: Question): Promise<any>;
  delete (id: string): Promise<any>;
}
