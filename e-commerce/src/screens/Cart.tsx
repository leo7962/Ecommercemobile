import React from 'react';
import {StyleSheet, Text, View} from "react-native";

export default function Cart() {
    return (
        <View style={styles.container}>
            <Text>Estamos en Cart</Text>
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
