import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { IQuestionRepository } from "../../repository/IQuestionRepository";

@injectable()
export class DeleteQuestion {
  constructor(
    @inject('QuestionRepository')
    private readonly questionRepository: IQuestionRepository
  ) { }
  async execute (request: Request, response: Response) {
    const { id } = request.params
    await this.questionRepository.delete(id);
    return response.status(204).send()
  }
}
