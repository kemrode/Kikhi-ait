import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import WelcomeButton from "./WelcomeButton";

export default function WelcomeView() {
    const welcomeText: string = 'Bienvenue dans Kikhiçait !'
    const welcomeTitleText: string = 'Kikhiçait'
    return (
        <View style={styles.mainView}>
            <View style={styles.logoView}>
                <Image style={styles.logoStyle} source={require('../ressources/images/logoTwo.jpg')} />
            </View>
            <View style={styles.titleView}>
                <Text style={styles.welcomeText}>{welcomeText}</Text>
                <Text style={styles.welcomeTitle}>{welcomeTitleText}</Text>
            </View>
            <View style={styles.buttonsView}>
                <View style={{ flex: 1 }}>
                    <WelcomeButton title={"Jouer"} />
                </View>
                <View style={{ flex: 1 }}>
                    <WelcomeButton title={"Classement"} />
                </View>
                <View style={{ flex: 1 }}>
                    <WelcomeButton title={"Options"} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#1F0536',
    },
    logoStyle: {
        width: '75%',
        height: '75%',
        resizeMode: 'contain'
    },
    logoView: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 13
    },
    titleView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonsView: {
        flex: 3
    },
    welcomeText: {
        fontSize: 25,
        color: '#2023E6'
    },
    welcomeTitle: {
        fontSize: 18,
        color: '#2023E6'
    }
})