import { Question } from '../models/Questions';

export interface IQuestionRepository {
  create (question: Question): Promise<void>;
  read (): Promise<any>;
  update (id: string, question: Question): Promise<void>;
  delete (id: string): Promise<void>;
  find (id: string[]): Promise<IQuestionRepository.Params[]>;
}
namespace IQuestionRepository {
  export type Params = {
    utterance?: string
    question?: string
    answers?: string[]
    correct_answer?: string
    type?: string
  }
}
