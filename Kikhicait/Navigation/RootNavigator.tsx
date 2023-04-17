import React from "react";
import { RootTypes } from "./RootTypes";
import WelcomeView from "../Components/WelcomeView";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function RootNavigator() {

    const Stack = createNativeStackNavigator<RootTypes>();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Welcome' component={WelcomeView} />
        </Stack.Navigator>
    )

}
