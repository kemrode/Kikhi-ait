import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";

export default function NextViewButton(props: { navigation: any; screenName: string; playerPicture: any; playerName: string }) {
    // Properties
    const nextTitle: string = "Suivant";
    const nextNavigation = props.navigation;
    const nextScreenName: string = props.screenName;

    // Render
    return (
        <Pressable style={styles.mainView} onPress={() => {
            nextNavigation.navigate(nextScreenName, { 'playerPicture': props.playerPicture, 'playerName': props.playerName })
        }}>
            <View style={styles.textView}>
                <Text style={styles.textFont}>{nextTitle}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textView: {
        width: '80%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 13,
        backgroundColor: '#2023E6'
    },
    textFont: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    }
})