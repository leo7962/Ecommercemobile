import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import Home from "../screens/Home";
import Favorites from "../screens/Favorites";
import Cart from "../screens/Cart";
import Account from "../screens/Account";
import {Ionicons} from '@expo/vector-icons';
import {StyleSheet} from "react-native";
import Colors from "../styles/Colors";

const Tab = createMaterialBottomTabNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator barStyle={styles.navigation} screenOptions={({route}) => ({
                tabBarIcon: (routeStatus) => {
                    return setIcon(route, routeStatus);
                }
            })}>
                <Tab.Screen name={"home"} component={Home} options={{title: "Inicio"}}/>
                <Tab.Screen name={"favorites"} component={Favorites} options={{title: "Favoritos"}}/>
                <Tab.Screen name={"cart"} component={Cart} options={{title: "Carrito"}}/>
                <Tab.Screen name={"account"} component={Account} options={{title: "Mi cuenta"}}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

function setIcon(route: any, routeStatus: any) {
    let iconName = "";
    switch (route.name) {
        case "home":
            iconName = "home"
            break;
        case "favorites":
            iconName = "heart";
            break;
        case "cart":
            iconName = "cart";
            break;
        case "account":
            iconName = "menu";
            break;
        default:
            break;
    }
    return <Ionicons name={iconName} style={styles.icon}/>
}

const styles = StyleSheet.create({
    navigation: {
        backgroundColor: Colors.bgDark
    },
    icon: {
        fontSize: 20,
        color: Colors.fontLight,
    }
});
