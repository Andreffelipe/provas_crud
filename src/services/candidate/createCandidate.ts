import { Response, Request } from "express";
import { inject, injectable } from "tsyringe";
import { Candidate } from "../../models/Candidate";
import { ICandidateRepository } from "../../repository/ICandidateRepository";

@injectable()
export class CreateCandidate {
  constructor(
    @inject('CandidateRepository')
    private readonly candidateRepository: ICandidateRepository
  ) { }
  async execute (request: Request, response: Response) {
    const { name, email } = request.body;
    const candidateIsExists = await this.candidateRepository.find(email)
    if (!!candidateIsExists.length) {
      return response.status(400).json({ message: "email already registered in the system" })
    }
    const newCandidate = new Candidate(
      name, email
    )
    const candidate = await this.candidateRepository.create(
      newCandidate.name, newCandidate.email, newCandidate.hash_identifier
    )
    return response.status(201).json(candidate);
  }
}
