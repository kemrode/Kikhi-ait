import React from "react";
import { Pressable, View, Text } from "react-native";

export default function NextViewButton(props: { navigation: any; screenName: string; }) {
    // Properties
    const nextTitle: string = "Suivant";
    const nextNavigation = props.navigation;
    const nextScreenName: string = props.screenName;

    // Render
    return (
        <Pressable onPress={() => {
            nextNavigation.navigate(nextScreenName)
        }}>
            <View>
                <Text>{nextTitle}</Text>
            </View>
        </Pressable>
    )
}