import { Response, Request } from "express";
import { inject, injectable } from "tsyringe";
import { IExamsRepository } from "../../repository/IExamsRepository";

@injectable()
export class FindExams {
  constructor(
    @inject("ExamsRepository")
    private readonly examsRepository: IExamsRepository
  ) { }
  async execute (request: Request, response: Response) {
    const exams = await this.examsRepository.find()
    return response.status(200).json(exams)
  }
}
