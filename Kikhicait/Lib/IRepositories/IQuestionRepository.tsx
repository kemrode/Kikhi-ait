import { Question } from "../Models/Question";

export interface IQuestionRepository {

    GetAll(): Question[];
    GetQuestionById(id: string): Question;
}