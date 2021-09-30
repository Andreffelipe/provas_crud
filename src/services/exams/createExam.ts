import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { IMailProvider } from "../../provider/IMailProvider";
import { ICandidateRepository } from "../../repository/ICandidateRepository";
import { IExamsRepository } from "../../repository/IExamsRepository";

@injectable()
export class CreateExam {
  constructor(
    @inject('CandidateRepository')
    private readonly candidateRepository: ICandidateRepository,
    @inject('ExamsRepository')
    private readonly examsRepository: IExamsRepository,
    @inject('MailProvider')
    private readonly mailProvider: IMailProvider
  ) { }
  async execute (request: Request, response: Response) {
    const { questions_ids, hash_id } = request.body
    await this.examsRepository.create(questions_ids, hash_id);
    const candidate = await this.candidateRepository.findByHash(hash_id);
    await this.mailProvider.sendMail({
      to: {
        name: candidate.name,
        email: candidate.email,
      },
      from: {
        name: 'Equipe do Meu App',
        email: 'equipe@meuapp.com',
      },
      subject: 'Seja bem-vindo à plataforma',
      body: `<p>http://localhost:3000/exam/${candidate.hash_identifier}</p>`
    });

    return response.status(200).send();
  }
}

// function randomIntFromInterval(0, 4) { // min and max included
//   return Math.floor(Math.random() * (max - min + 1) + min)
// }

// const rndInt = randomIntFromInterval(1, 6)
// console.log(rndInt)
