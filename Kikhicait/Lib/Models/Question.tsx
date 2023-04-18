export interface Question {
    id: number;
    questionText: string;
    rightAnswer: number;
}



export class QuestionClass implements Question {
    id: number;
    questionText: string;
    rightAnswer: number;

    constructor(id: number, questionText: string, rightAnswer: number) {
        this.id = id;
        this.questionText = questionText;
        this.rightAnswer = rightAnswer;
    }
}