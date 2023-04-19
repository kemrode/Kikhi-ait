import { Answer } from "../Models/Answer";

export interface IAnswerRepository {

    GetAllAnswer(): Promise<Answer[]>;
    GetAnswerByQuestionId(questionId: string): Promise<Answer[]>;

}