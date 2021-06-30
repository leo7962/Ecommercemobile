import React from 'react';
import {View} from "react-native";
import {Button, TextInput} from "react-native-paper";
import {useFormik} from "formik";
import {formStyles} from "../../styles";

export default function RegisterForm(props: any) {
    const {changeForm} = props;
    const formik = useFormik({
        initialValues: initialValues(),
        onSubmit: (formData) => {
            console.log("Registro de usuario enviado");
            console.log(formData);
        }
    });

    return (
        <View>
            <TextInput label="Email" style={formStyles.input}
                       onChangeText={(text) => formik.setFieldValue("email", text)}/>
            <TextInput label="Nombre de usuario" style={formStyles.input}
                       onChangeText={(text) => formik.setFieldValue("username", text)}/>
            <TextInput label="Contraseña" style={formStyles.input} secureTextEntry
                       onChangeText={(text) => formik.setFieldValue("password", text)}/>
            <TextInput label="Repetir contraseña" style={formStyles.input} secureTextEntry
                       onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}/>
            <Button mode={"contained"} style={formStyles.btnSucces} onPress={formik.handleSubmit}>Registrarse</Button>
            <Button mode={"text"} style={formStyles.btnText} labelStyle={formStyles.btnTextLabel} onPress={changeForm}>Iniciar
                sesión</Button>
        </View>
    );
}

function initialValues() {
    return {
        email: "",
        username: "",
        password: "",
        repeatPassword: ""
    }
}
