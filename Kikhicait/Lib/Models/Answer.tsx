export interface Answer {
    id: number;
    idQuestion: number;
    answerText: string;
}

export class AnswerClass implements Answer {
    id: number;
    idQuestion: number;
    answerText: string;

    constructor(id: number, idQuestion: number, answerText: string) {
        this.id = id;
        this.idQuestion = idQuestion;
        this.answerText = answerText;
    }

}