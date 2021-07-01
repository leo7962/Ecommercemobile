import React, {useState} from 'react';
import {View} from "react-native";
import {Button, TextInput} from "react-native-paper";
import {useFormik} from "formik";
import * as Yup from "yup";
import {loginApi} from "../../api/user";
import Toast from "react-native-root-toast";
import {RootSiblingParent} from "react-native-root-siblings";
import {formStyles} from "../../styles";
import useAuth from "../../hooks/useAuth";

export default function LoginForm(props: any) {
    const {changeForm} = props;
    const [loading, setLoading] = useState(false);
    const {login} = useAuth();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object().shape(validationSchema()),
        onSubmit: async (formData) => {
            setLoading(true);
            try {
                const response = await loginApi(formData);
                if (response.statusCode === 400) Toast.show("Error en el usuario o contraseña", {
                    position: Toast.positions.CENTER
                });
                login(response);
            } catch (error) {
                Toast.show(error, {
                    position: Toast.positions.CENTER
                });
                setLoading(false);
            }
        }
    });

    return (
        <View>
            <RootSiblingParent>
                <TextInput label={"Email o Username"} style={formStyles.input}
                           onChangeText={(text) => formik.setFieldValue("identifier", text)}
                           value={formik.values.identifier} error={Boolean(formik.errors.identifier)}/>
                <TextInput label={"Password"} style={formStyles.input}
                           onChangeText={(text) => formik.setFieldValue("password", text)}
                           value={formik.values.password} error={Boolean(formik.errors.password)} secureTextEntry/>
                <Button mode={"contained"} style={formStyles.btnSuccess} onPress={formik.handleSubmit}
                        loading={loading}>Iniciar
                    sesión</Button>
                <Button mode={"text"} style={formStyles.btnText} labelStyle={formStyles.btnTextLabel}
                        onPress={changeForm}>Registrarse</Button>
            </RootSiblingParent>
        </View>
    );
}

function initialValues() {
    return {
        identifier: "",
        password: ""
    }
}

function validationSchema() {
    return {
        identifier: Yup.string().required(),
        password: Yup.string().required()
    }
}
