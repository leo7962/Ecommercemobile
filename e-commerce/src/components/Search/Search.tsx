import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {Searchbar} from "react-native-paper";
import Colors from "../../styles/Colors";

export default function Search() {
    return (
        <View style={styles.container}>
            <Searchbar placeholder="Buscar"  />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.bgDark,
        paddingVertical: 10,
        paddingHorizontal: 20,
        zIndex: 1,
    }
})
