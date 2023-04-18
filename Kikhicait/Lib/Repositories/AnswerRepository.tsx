import { IAnswerRepository } from "../IRepositories/IAnswerRepository";
import { Answer } from "../Models/Answer";

export class AnswerRepository implements IAnswerRepository {

    // Constructor
    constructor() { }

    // GET Methods
    GetAllAnswer(): Answer[] {
        throw new Error("Method not implemented.");
    }
    GetAnswerByQuestionId(questionId: string): Answer[] {
        throw new Error("Method not implemented.");
    }

}