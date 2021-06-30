import React, {useState} from 'react';
import {Text} from 'react-native';
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
