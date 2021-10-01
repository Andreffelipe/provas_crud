import { IExamsRepository } from "../IExamsRepository";
import QuestionModel from "../../db/questionModel";
import ExamModel from "../../db/examsModel";

export class ExamsRepository implements IExamsRepository {
  async findExamCandidate (id: string): Promise<any> {
    const exams = await ExamModel.findOne({ hash_id: id });
    return exams;
  }
  async findRandom (type: string): Promise<void> {
    QuestionModel.count().exec(function (err, count) {
      let random = Math.floor(Math.random() * count)
      QuestionModel.findOne().skip(random).exec(
        function (err, result) {
          if (err) throw new Error(err.message);
          console.log(result)
        })
    })
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
