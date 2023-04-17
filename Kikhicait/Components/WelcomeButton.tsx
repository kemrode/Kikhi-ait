import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { Icon } from "../App";

export default function WelcomeButton(props: { title: string; navigation: any; screenName: string; iconName: string }) {

    // Properties
    const title = props.title;
    const nextNavigation = props.navigation;
    const nextScreenName = props.screenName;
    const buttonIconName = props.iconName;

    // Render
    return (
        <Pressable style={styles.mainView} onPress={() => {
            nextNavigation.navigate(nextScreenName)
        }}>
            <View>
                <Text style={styles.text}>{title}</Text>
            </View>
            <View>
                <Icon name={buttonIconName} size={35} color='white' />
            </View>
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