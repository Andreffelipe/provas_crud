import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { Question } from "../../models/Questions";
import { IQuestionRepository } from "../../repository/IQuestionRepository";

@injectable()
export class FindAllQuestions {
  constructor(
    @inject("QuestionRepository")
    private readonly questionRepository: IQuestionRepository
  ) { }
  async execute (request: Request, response: Response): Promise<Response<Question[]>> {
    const questions = await this.questionRepository.read()
    return response.status(200).json(questions);
  }
}
