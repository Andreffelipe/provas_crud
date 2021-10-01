import { Question } from '../models/Questions';

export interface IExamsRepository {
  find (): Promise<Question[]>
  create (questions_ids: string[], candidate_id: string): Promise<void>
  findRandom (type: string): Promise<void>
  findExamCandidate (id: string): Promise<IExamsRepository.ExamParams>
}

namespace IExamsRepository {
  export type ExamParams = {
    questions_ids: string[],
    hash_id: string,
    answers: {}
  }
}
