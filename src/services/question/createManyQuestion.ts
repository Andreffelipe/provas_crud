import { Response, Request } from "express";
import { inject, injectable } from "tsyringe";
import { IQuestionRepository } from "../../repository/IQuestionRepository";
import { Question } from "../../models/Questions";

@injectable()
export class CreateManyQuestion {
  constructor(
    @inject('QuestionRepository')
    private readonly questionRepository: IQuestionRepository
  ) { }
  async execute (request: Request, response: Response) {
    const { questions } = request.body;
    questions.map(async (element: Question) => {
      const { utterance, question, answers, correct_answer, type } = element
      const newQuestion = new Question({
        utterance, question, answers, correct_answer, type
      })
      await this.questionRepository.create(newQuestion);
    })
    return response.status(201).send()
  }
}
