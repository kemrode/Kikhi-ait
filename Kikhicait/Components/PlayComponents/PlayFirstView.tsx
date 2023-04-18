import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import NextViewButton from "../NextViewButton";
import { useNavigation } from "@react-navigation/native";
import { LaunchGameViewProps } from "../../Navigation/RootTypes";
import GetFileFromLibrairy from "./GetFileFromLibrairy";

export default function PlayFirstView() {

    // Properties
    const titleMessageText: string = "Pour commencer une partie, saisissez votre profil";
    const pseudoText: string = "Pseudo";
    const [pseudo, setPseudo] = useState("mon pseudo");
    const launchGameNavigation = useNavigation<LaunchGameViewProps>();

    console.log(pseudo);

    return (
        <View style={styles.mainView}>
            <View style={styles.titleView}>
                <Text style={styles.titleText}>{titleMessageText}</Text>
            </View>
            <View style={{ flex: 1.5, alignItems: 'center', justifyContent: 'center' }}>
                <GetFileFromLibrairy />
            </View>
            <View style={{ flex: 2, marginLeft: 10, alignItems: 'center' }}>
                <Text style={styles.titleText}>{pseudoText}</Text>
                <TextInput
                    style={styles.inputStyle}
                    placeholder='Votre magnifique pseudo'
                    onChangeText={(value) => {
                        setPseudo(value);
                    }}
                    keyboardType='default'
                />
            </View>
            <View style={{ flex: 2 }}>
                <NextViewButton navigation={launchGameNavigation} screenName='LaunchGame' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: "#1F0536"
    },
    titleView: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        color: 'white',
        fontSize: 25,
        textAlign: 'center'
    },
    inputStyle: {
        width: '80%',
        height: '50%',
        backgroundColor: 'white',
        opacity: 0.25,
    }
})