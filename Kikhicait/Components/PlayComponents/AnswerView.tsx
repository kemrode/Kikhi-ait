import React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";

export default function AnswerView(props: { idAnswer: number; answer: string }) {
    // Properties
    const answer = props.answer;
    const lettersArray: string[] = ['A', 'B', 'C', 'D'];
    let letter: string = lettersArray[(props.idAnswer - 1)];

    const color: string[] = ['yellow', 'red', 'green', 'gray'];
    let backColor = color[(props.idAnswer - 1)]

    // Render
    return (
        <Pressable style={{ flex: 1, flexGrow: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }} onPress={() => console.log(`j'appuie sur la réponse ${letter}`)}>

            <View style={styles.mainView}>
                <View style={styles.answerLetterLabelView}>
                    <Text style={styles.answerLetterText}>{letter}</Text>
                </View>
                <View style={styles.answerLabelView}>
                    <Text style={styles.answerText}>{answer}</Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    mainView: {
        width: '95%',
        height: '90%',
        borderRadius: 20,
        backgroundColor: 'rgba(32,35,230,0.75)',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    answerLetterLabelView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    answerLetterText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white'
    },
    answerLabelView: {
        flex: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    answerText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    }
})