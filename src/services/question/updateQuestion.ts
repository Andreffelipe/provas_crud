import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { IQuestionRepository } from "../../repository/IQuestionRepository";

@injectable()
export class UpdateQuestion {
  constructor(
    @inject('QuestionRepository')
    private readonly questionRepository: IQuestionRepository
  ) { }
  async execute (request: Request, response: Response) {
    const { id } = request.params
    const { utterance, question, answers, correct_answer, type } = request.body
    const newQuestion = await this.questionRepository.update(id, { utterance, question, answers, correct_answer, type })
    return response.status(201).json(newQuestion);
  }
}
