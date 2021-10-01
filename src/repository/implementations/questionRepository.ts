import { Question } from "../../models/Questions";
import { IQuestionRepository } from "../IQuestionRepository";
import QuestionModel from "../../db/questionModel";
import { Types } from "mongoose";

export type Params = {
  utterance?: string
  question?: string
  answers?: string[]
  correct_answer?: string
  type?: string
}

export class QuestionRepository implements IQuestionRepository {
  async find (ids: string[]): Promise<any> {
    let question: Params[] = []
    ids.forEach(async (element) => {
      let result = await QuestionModel.findById({ _id: element }) as any;
      question.push(result)
    })
    console.log(question)
    return question
  }
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
