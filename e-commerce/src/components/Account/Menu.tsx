import React from 'react';
import {Alert} from "react-native";
import {List} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";
import useAuth from "../../hooks/useAuth";

export default function Menu() {
    const navigation = useNavigation();
    const {logout} = useAuth();

    const logoutAccount = () => {
        Alert.alert("Cerrar Sesión",
            "¿Está seguro de cerrar sesión?",
            [
                {
                    text:"NO"
                },
                {
                    text: "Sí",
                    onPress: logout,
                },
            ],
            {cancelable: false}
        );
    }

    return (
        <>
            <List.Section>
                <List.Subheader>Mi cuenta</List.Subheader>
                <List.Item title={"Cambiar nombre"} description={"Cambia el nombre de tu cuenta"}
                           left={(props) => <List.Icon {...props} icon={"face"}/>}
                           onPress={() => navigation.navigate("change-name")}
                />
                <List.Item title={"Cambiar e-mail"} description={"Actualiza o cambia el e-mail de tu cuenta"}
                           left={(props) => <List.Icon {...props} icon={"at"}/>}
                           onPress={() => navigation.navigate("change-email")}
                />
                <List.Item title={"Cambiar UserName"} description={"Cambia el userName de tu cuenta"}
                           left={(props) => <List.Icon {...props} icon={"sim"}/>}
                           onPress={() => navigation.navigate("change-username")}
                />
                <List.Item title={"Cambiar contraseña"} description={"Cambia la contraseña de tu cuenta"}
                           left={(props) => <List.Icon {...props} icon={"key"}/>}
                           onPress={() => console.log("Ir a cambiar la contraseña")}
                />
                <List.Item title={"Mis direcciones"} description={"Administra las direcciones de envio"}
                           left={(props) => <List.Icon {...props} icon={"map"}/>}
                           onPress={() => console.log("Ir a cambiar la dirección")}
                />
            </List.Section>
            <List.Section>
                <List.Subheader>App</List.Subheader>
                <List.Item title={"Pedidos"} description={"Pedidos realizados"}
                           left={(props) => <List.Icon {...props} icon={"clipboard-list"}/>}
                           onPress={() => console.log("Ir a mis pedidos")}
                />
                <List.Item title={"Lista de deseos"} description={"Listado de todos los productos que deseas comprar"}
                           left={(props) => <List.Icon {...props} icon={"heart"}/>}
                           onPress={() => navigation.navigate("favorites")}
                />
                <List.Item title={"Cerrar sesión"} description={"Salir de tu cuenta"}
                           left={(props) => <List.Icon {...props} icon={"logout"}/>}
                           onPress={logoutAccount}
                />
            </List.Section>
        </>
    );
}
