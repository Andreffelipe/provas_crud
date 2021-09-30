import { container } from "tsyringe";
import { IQuestionRepository } from "./repository/IQuestionRepository";
import { QuestionRepository } from "./repository/implementations/questionRepository";
import { IExamsRepository } from "./repository/IExamsRepository";
import { ExamsRepository } from "./repository/implementations/examsRepository";
import { CandidateRepository } from "./repository/implementations/candidateRepository";
import { ICandidateRepository } from "./repository/ICandidateRepository";
import { IMailProvider } from "./provider/IMailProvider";
import { MailtrapMailProvider } from "./provider/implementation/mailerProvider";

container.registerSingleton<IQuestionRepository>('QuestionRepository', QuestionRepository);
container.registerSingleton<IExamsRepository>('ExamsRepository', ExamsRepository);
container.registerSingleton<ICandidateRepository>('CandidateRepository', CandidateRepository)
container.registerSingleton<IMailProvider>('MailProvider', MailtrapMailProvider)

export { container }
