import React, {useCallback} from 'react';
import {StyleSheet, View} from "react-native";
import {TextInput, Button} from "react-native-paper";
import * as Yup from "yup";
import {formStyles} from "../../styles";
import {useFormik} from "formik";
import {useFocusEffect} from "@react-navigation/native";
import {getMeApi} from "../../api/user";
import useAuth from "../../hooks/useAuth";

export default function ChangeName() {
    const {auth} = useAuth();

    useFocusEffect(
        useCallback(() => {
            (async () =>{
                //TODO: valores pendientes por default aún no btenidos y pendiente de serializar.
                const response = await getMeApi(auth.token);
                console.log(response);
            }) ()
        }, [])
    )

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: (formValue) => {
            console.log("formulario enviado");
            console.log(formValue);
        },
    });


    return (
        <View style={styles.container}>
            <TextInput label={"Nombre"} style={formStyles.input}
                       onChangeText={(text) => formik.setFieldValue("name", text)}
                       value={formik.values.name} error={Boolean(formik.errors.name)}></TextInput>
            <TextInput label={"Apellidos"} style={formStyles.input}
                       onChangeText={(text) => formik.setFieldValue("lastname", text)}
                       value={formik.values.lastname} error={Boolean(formik.errors.lastname)}></TextInput>
            <Button mode={"contained"} style={formStyles.btnSuccess} onPress={formik.handleSubmit}>Cambiar
                Nombre y apellidos</Button>
        </View>
    );
}

function initialValues() {
    return {
        name: "",
        lastname: ""
    }
}

function validationSchema() {
    return {
        name: Yup.string().required(),
        lastname: Yup.string().required()
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    }
});
