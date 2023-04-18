import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GameOptionsHeader() {
    // Properties
    const exitLabelText: string = "exit";
    const switchOptionText: string = "switch";
    const fiftyfiftyOptionText: string = "50:50";

    // Render
    return (
        <View style={styles.mainView}>
            <View style={styles.exitContainer}>
                <Pressable style={styles.exitView} onPress={() => console.log("je quitte le jeu")}>
                    <Text style={[styles.textProperties, { fontSize: 20 }]}>{exitLabelText}</Text>
                </Pressable>
            </View>
            <View style={styles.optionsContainer}>
                <Pressable style={styles.optionView} onPress={() => console.log("j'active le switch")}>
                    <View style={styles.optionLabelView}>
                        <Text style={[styles.textProperties, { fontSize: 15 }]}>{switchOptionText}</Text>
                    </View>
                </Pressable>
                <Pressable style={styles.optionView} onPress={() => console.log("j'active le 50:50")}>
                    <View style={styles.optionLabelView}>
                        <Text style={[styles.textProperties, { fontSize: 15 }]}>{fiftyfiftyOptionText}</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        flexDirection: 'row',
    },
    exitContainer: {
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    optionsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    optionView: {
        flex: 1,
    },
    optionLabelView: {
        width: '90%',
        height: '90%',
        backgroundColor: '#2023E6',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    exitView: {
        width: '50%',
        height: '90%',
        borderRadius: 20,
        backgroundColor: '#2023E6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textProperties: {
        fontWeight: 'bold',
        color: 'white'
    }
})