import { MediaTypeOptions, launchImageLibraryAsync } from "expo-image-picker";
import React, { useState } from "react";
import { Pressable, View, StyleSheet, Image } from "react-native";

export default function GetFileFromLibrairy() {
    // Properties
    const [image, setImage] = useState<any>();
    const getImage = () => {

        launchImageLibraryAsync({
            mediaTypes: MediaTypeOptions.Images,
            allowsEditing: true,
            base64: true,
            aspect: [4, 3],
            quality: 1,
        }).then((result) => {
            if (!result.cancelled) {
                setImage(result.uri);
            }
        })
    };

    return (
        <Pressable style={styles.mainView} onPress={getImage}>
            <View style={{ width: 100, height: 100, borderRadius: 50, backgroundColor: 'gray' }}>
                {image && <Image source={{ uri: image }} style={styles.imageView} />}
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    imageView: {
        width: 100,
        height: 100,
        resizeMode: 'cover'
    }
})