import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";


interface IProps {
    title: String
}

export default function WelcomeButton(title: IProps) {
    return (
        <Pressable style={styles.mainView} onPress={() => {
            console.log("on a pressé le bouton !")
        }}>
            <Text style={styles.text}>{title.title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 0.85,
        backgroundColor: '#2023E6',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    text: {
        color: 'white',
        fontSize: 20
    }
})