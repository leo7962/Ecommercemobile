import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider as PaperPrivider} from "react-native-paper";
import AuthScreen from "./src/screens/Auth";

export default function App() {
    const [auth, setAuth] = useState(undefined);
    return (
        <PaperPrivider>
            {auth ? <Text>Zona de Usuarios</Text> : <AuthScreen/>}
        </PaperPrivider>
    );
}

const styles = StyleSheet.create({});
