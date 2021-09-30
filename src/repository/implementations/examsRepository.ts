import { IExamsRepository } from "../IExamsRepository";
import QuestionModel from "../../db/questionModel";
import ExamModel from "../../db/examsModel";

export class ExamsRepository implements IExamsRepository {
  findRandom (): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async create (questions_ids: string[], hash_id: string): Promise<void> {
    const exam = new ExamModel({
      questions_ids, hash_id
    })
    await exam.save();
  }
  async find (): Promise<any[]> {
    const dissertation = await QuestionModel.find({ type: "Dissertation" })
      .sort({ 'date': -1 })
      .limit(2)
      .select('-correct_answer')
    const multipleChoice = await QuestionModel.find({ type: "MultipleChoice" })
      .sort({ 'date': -1 })
      .limit(5)
      .select('-correct_answer')
    const trueOrFalse = await QuestionModel.find({ type: "TrueOrFalse" })
      .sort({ 'date': -1 })
      .limit(5)
      .select('-correct_answer')
    return [...dissertation, ...multipleChoice, ...trueOrFalse]
  }
}
