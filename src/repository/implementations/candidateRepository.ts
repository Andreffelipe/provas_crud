import { ICandidateRepository } from "../ICandidateRepository";
import CandidateModel from "../../db/candidateModel";
import { Candidate } from "../../models/Candidate";

export class CandidateRepository implements ICandidateRepository {
  async findAll (): Promise<any> {
    const candidate = await CandidateModel.find()
    return candidate;
  }
  async find (email: string): Promise<any> {
    const candidate = await CandidateModel.find({ email })
    return candidate;
  }
  async findByHash (hash: string): Promise<any> {
    const candidate = await CandidateModel.findOne({ hash_identifier: hash })
    return candidate;
  }
  async create (name: string, email: string, hash_identifier: string): Promise<any> {
    const candidate = new CandidateModel({
      email, name, hash_identifier
    })
    return candidate.save().then(async (_) => {
      const candidate = await CandidateModel.find({ email })
      return candidate
    });
  }
}
