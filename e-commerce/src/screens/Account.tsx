import React from 'react';
import {StyleSheet, Text, View} from "react-native";

export default function Account() {
    return (
        <View style={styles.container}>
            <Text>Estamos en Cuenta</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
