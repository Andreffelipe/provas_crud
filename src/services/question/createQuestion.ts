import { Response, Request } from 'express';
import { inject, injectable } from 'tsyringe';
import { IQuestionRepository } from '../../repository/IQuestionRepository';
import { Question } from '../../models/Questions';

@injectable()
export class CreateQuestion {
  constructor(
    @inject('QuestionRepository')
    private readonly questionRepository: IQuestionRepository
  ) { }
  async execute (request: Request, response: Response) {
    const { utterance, question, answers, correct_answer, type } = request.body;
    // if (type == 'MultipleChoice' || 'TrueOrFalse') {
    //   if (Object.keys(choice).length == 0)
    //     return response.status(400).json({ message: "choice cannot be empty" })
    // }
    const newQuestion = new Question({
      utterance, question, answers, correct_answer, type

    });
    await this.questionRepository.create(newQuestion);
    return response.status(201).send();
  }
}
