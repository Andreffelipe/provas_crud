import { Response, Request } from 'express';
import { inject, injectable } from 'tsyringe';
import { IExamsRepository } from '../../repository/IExamsRepository';
import { IQuestionRepository } from '../../repository/IQuestionRepository';

@injectable()
export class FindExamCandidate {
  constructor(
    @inject('ExamsRepository')
    private readonly examsRepository: IExamsRepository,
    @inject('QuestionRepository')
    private readonly QuestionRepository: IQuestionRepository
  ) { }
  async execute (request: Request, response: Response) {
    const { id } = request.params;
    const exams = await this.examsRepository.findExamCandidate(id);
    const exam = await this.QuestionRepository.find(exams.questions_ids);
    console.log(exam)

    return response.status(200).json(exam);
  }
}
