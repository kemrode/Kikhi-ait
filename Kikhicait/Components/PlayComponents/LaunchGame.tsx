import React from "react";
import { View, StyleSheet, Image, Text, FlatList } from "react-native";
import GameOptionsHeader from "./GameOptionsHeader";
import AnswerView from "./AnswerView";
import { QuestionClass } from "../../Lib/Models/Question";
import { AnswerClass } from "../../Lib/Models/Answer";

export default function LaunchGame(props: { route: { params: any } }) {
    // Properties
    const playerPicture = props.route.params.playerPicture;
    const playerName = props.route.params.playerName;
    const questionText: string = "Ceci est l'intitulé de la question à poser";


    const questionMockData = [
        new QuestionClass(1, 'ma première question', 1),
        new QuestionClass(2, 'ma seconde question', 2),
        new QuestionClass(3, 'une troisième question', 3),
        new QuestionClass(4, 'et une dernière pour la route', 4)
    ]

    const answerMockData = [
        new AnswerClass(1, 1, 'la bonne réponse'),
        new AnswerClass(2, 1, 'une mauvaise réponse'),
        new AnswerClass(3, 1, 'une mauvaise réponse'),
        new AnswerClass(4, 1, 'une mauvaise réponse'),
    ]

    // Render
    return (
        <View style={styles.mainView}>
            <View style={styles.headContainer}>
                <GameOptionsHeader />
            </View>
            <View style={styles.pictureContainer}>
                <Image style={styles.pictureView} source={{ uri: playerPicture }} />
            </View>
            <View style={styles.pseudoView}>
                <Text style={styles.pseudoLabelProperties}>{playerName}</Text>
            </View>
            <View style={styles.questionView}>
                <Text style={styles.questionLabelProperties}>{questionText}</Text>
            </View>
            <View style={styles.answersContainer}>
                {answerMockData.map((data) => {
                    return (
                        <AnswerView answer={data.answerText} idAnswer={data.id} />
                    )
                })}
                {/* <FlatList
                    style={styles.flatListView}
                    contentContainerStyle={{
                        display: 'flex',
                        flex: 1,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                    }}
                    data={answerMockData}
                    numColumns={1}
                    renderItem={({ item }) => <AnswerView answer={item.answerText} idAnswer={item.id} />}
                    keyExtractor={(itemData: AnswerClass) => itemData.answerText}
                /> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#1F0536'
    },
    headContainer: {
        flex: 0.5
    },
    pictureContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pictureView: {
        width: 100,
        height: 100,
        borderRadius: 50,
        resizeMode: 'cover',
        overflow: 'hidden',
        backgroundColor: 'red'
    },
    pseudoView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pseudoLabelProperties: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    },
    questionLabelProperties: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    questionView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    answersContainer: {
        flex: 4,
    },
    flatListView: {
        flex: 1,
        backgroundColor: 'purple'
    }
})    