import { db } from "../../firebaseDb";
import { IAnswerRepository } from "../IRepositories/IAnswerRepository";
import { AnswerClass } from "../Models/Answer";
import { Answer } from "../Models/Answer";
import { ref, get } from "firebase/database";

const getDatabase = () => {
    return db;
}

export class AnswerRepository implements IAnswerRepository {

    // Properties

    // Constructor
    constructor() { }

    // GET Methods
    async GetAllAnswer(): Promise<Answer[]> {
        try {
            const snapshot = await get(ref(db, '/answer'));
            if (snapshot.exists()) {
                console.log(`au retour on a : ${snapshot.val()}`);
                return snapshot.val();
            } else {
                console.log("raté")
                return [];
            }
        } catch (error: any) {
            console.log("raté dans le catch")
            return [];
        }
    }

    async GetTestAll(): Promise<any> {
        let answers: AnswerClass[] = []
        try {
            console.log(db);
            const dataBase = getDatabase();
            const snapshot = await get(ref(dataBase, '/answer'));
            if (snapshot.exists()) {
                console.log(snapshot.val());
                for (var element in snapshot.val()) {
                    console.log("mon élément vaut :", snapshot)
                    const id = 0;
                    const idQuestion = parseInt(snapshot.val()[element]["idQuestion"])
                    const one = snapshot.val()[element]["one"];
                    const two = snapshot.val()[element]["two"];
                    const three = snapshot.val()[element]["three"];
                    const four = snapshot.val()[element]["four"];
                    let firstAnswer: AnswerClass = new AnswerClass(id, idQuestion, one);
                    answers.push(firstAnswer)
                    let secondAnswer: AnswerClass = new AnswerClass(id, idQuestion, two);
                    answers.push(secondAnswer)
                    let thirdAnswer: AnswerClass = new AnswerClass(id, idQuestion, three);
                    answers.push(thirdAnswer)
                    let fourthAnswer: AnswerClass = new AnswerClass(id, idQuestion, four);
                    answers.push(fourthAnswer)
                }
                console.log("mon tableau vaut : ", answers)
                return answers
            } else {
                console.log("ça marche pô")
            }
        } catch (error: any) {
            console.log(error.message)
        }
    }

    GetAnswerByQuestionId(questionId: string): Promise<Answer[]> {
        throw new Error("Method not implemented.");
    }

}