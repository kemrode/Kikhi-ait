import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import GameOptionsHeader from "./GameOptionsHeader";

export default function LaunchGame(props: { route: { params: any } }) {
    // Properties
    const playerPicture = props.route.params.playerPicture;
    const playerName = props.route.params.playerName;

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
            <View style={styles.questionView}></View>
            <View style={styles.answersContainer}></View>
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
    questionView: {
        flex: 1,
        backgroundColor: 'green'
    },
    answersContainer: {
        flex: 3,
        backgroundColor: 'purple'
    }
})    