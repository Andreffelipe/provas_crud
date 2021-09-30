import { Response, Request } from "express";
import { inject, injectable } from "tsyringe";
import { ICandidateRepository } from "../../repository/ICandidateRepository";

@injectable()
export class findCandidate {
  constructor(
    @inject('CandidateRepository')
    private readonly candidateRepository: ICandidateRepository
  ) { }
  async execute (request: Request, response: Response) {
    const candidate = await this.candidateRepository.findAll()
    return response.status(200).json(candidate);
  }
}
