import { Question } from "../../models/Questions";
import { IQuestionRepository } from "../IQuestionRepository";
import QuestionModel from "../../db/questionModel";

export class QuestionRepository implements IQuestionRepository {
  async delete (id: string): Promise<void> {
    await QuestionModel.findByIdAndDelete({ _id: id })
  }
  async update (id: string, question: Question): Promise<any> {
    const questions = await QuestionModel.findByIdAndUpdate({ _id: id }, {
      utterance: question.utterance,
      question: question.question,
      answers: question.answers,
      correct_answer: question.correct_answer,
      type: question.type,
    })
    return questions
  }
  async read (): Promise<any> {
    const questions = await QuestionModel.find({})
    return questions;
  }
  async create (question: Question): Promise<void> {
    const newQuestion = new QuestionModel({
      utterance: question.utterance,
      question: question.question,
      answers: question.answers,
      correct_answer: question.correct_answer,
      type: question.type,
    })
    await newQuestion.save();
  }
}
