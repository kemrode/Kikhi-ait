import React from "react";
import { RootTypes } from "./RootTypes";
import WelcomeView from "../Components/WelcomeView";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PlayFirstView from "../Components/PlayComponents/PlayFirstView";
import LaunchGame from "../Components/PlayComponents/LaunchGame";

export default function RootNavigator() {

    const Stack = createNativeStackNavigator<RootTypes>();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Welcome' component={WelcomeView} />
            <Stack.Screen name='Play' component={PlayFirstView} />
            <Stack.Screen name='LaunchGame' component={LaunchGame} />
        </Stack.Navigator>
    )
}
