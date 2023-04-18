import { Answer } from "../Models/Answer";

export interface IAnswerRepository {

    GetAllAnswer(): Answer[];
    GetAnswerByQuestionId(questionId: string): Answer[]

}