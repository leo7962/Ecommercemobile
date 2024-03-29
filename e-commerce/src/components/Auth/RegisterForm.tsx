import React, {useState} from 'react';
import {View} from "react-native";
import {Button, TextInput} from "react-native-paper";
import {useFormik} from "formik";
import * as Yup from "yup";
import {registerApi} from "../../api/user";
import Toast from "react-native-root-toast";
import {formStyles} from "../../styles";

export default function RegisterForm(props: any) {
    const {changeForm} = props;
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object().shape(validationSchema()),
        onSubmit: async (formData) => {
            setLoading(true);
            try {
                await registerApi(formData);
                changeForm();
            } catch (error) {
                setLoading(false);
                Toast.show("Error al registrar al usuario" + error, {position: Toast.positions.CENTER});
            }
        }
    });

    return (
        <View>
            <TextInput label="Email" style={formStyles.input}
                       onChangeText={(text) => formik.setFieldValue("email", text)} value={formik.values.email}
                       error={Boolean(formik.errors.email)} keyboardType={"email-address"} autoCapitalize="none"/>
            <TextInput label="Nombre de usuario" style={formStyles.input}
                       onChangeText={(text) => formik.setFieldValue("username", text)} value={formik.values.username}
                       error={Boolean(formik.errors.username)}/>
            <TextInput label="Contraseña" style={formStyles.input} secureTextEntry
                       onChangeText={(text) => formik.setFieldValue("password", text)} value={formik.values.password}
                       error={Boolean(formik.errors.password)}/>
            <TextInput label="Repetir contraseña" style={formStyles.input} secureTextEntry
                       onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
                       value={formik.values.repeatPassword}
                       error={Boolean(formik.errors.repeatPassword)}/>
            <Button mode={"contained"} style={formStyles.btnSuccess} onPress={formik.handleSubmit}
                    loading={loading}>Registrarse</Button>
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

function validationSchema() {
    return {
        email: Yup.string().email().required(),
        username: Yup.string().required(),
        password: Yup.string().required('La contraseña es requerida').min(8, 'La contraseña no debe ser menor a 8 digitos'),
        repeatPassword: Yup.string().required().oneOf([Yup.ref('password'), null], 'La contraseñas deben coincidir'),
    }
}
