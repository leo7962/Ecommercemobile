import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import Account from "../screens/Account/Account";
import ChangeName from "../screens/Account/ChangeName";
import ChangeEmail from "../screens/Account/ChangeEmail";
import ChangeUserName from "../screens/Account/ChangeUserName";
import Colors from "../styles/Colors";

const Stack = createStackNavigator();

export default function AccountStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerTintColor: Colors.fontLight,
            headerStyle: {backgroundColor: Colors.bgDark},
            cardStyle: {
                backgroundColor: Colors.bgLight
            }
        }}>
            <Stack.Screen name={"account"} component={Account} options={{title: "Cuenta", headerShown: false}}/>
            <Stack.Screen name={"change-name"} component={ChangeName} options={{title: "Cambiar Nombre y apellidos", }}/>
            <Stack.Screen name={"change-email"} component={ChangeEmail} options={{title: "Cambiar Correo electronico"}}/>
            <Stack.Screen name={"change-username"} component={ChangeUserName} options={{title: "Cambiar nombre de usuario"}}/>
        </Stack.Navigator>
    );
}
