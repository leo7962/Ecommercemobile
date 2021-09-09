import React, {useCallback, useState} from 'react';
import {StyleSheet, View} from "react-native";
import {TextInput, Button} from "react-native-paper";
import * as Yup from "yup";
import {useFormik} from "formik";
import {useFocusEffect, useNavigation} from "@react-navigation/native";
import {getMeApi, updateUserApi} from "../../api/user";
import useAuth from "../../hooks/useAuth";
import {formStyles} from "../../styles";
import Toast from "react-native-root-toast";

export default function ChangeName() {
    const [loading, setLoading] = useState(false);
    const {auth} = useAuth();
    const navigation = useNavigation();

    useFocusEffect(
        useCallback(() => {
            (async () => {
                const response = await getMeApi(auth.token);
                if (response.name && response.lastname) {
                    await formik.setFieldValue("name", response.name);
                    await formik.setFieldValue("lastname", response.lastname);
                }
            })()
        }, [])
    )

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
            setLoading(true);
            try {
                await updateUserApi(auth, formData);
                navigation.goBack();
            } catch (error) {
                Toast.show("Error al actualizar los datos.", {
                    position: Toast.positions.CENTER,
                });
                setLoading(false);
            }
        },
    });


    return (
        <View style={styles.container}>
            <TextInput label={"Nombre"} style={formStyles.input}
                       onChangeText={(text) => formik.setFieldValue("name", text)}
                       value={formik.values.name}
                       error={Boolean(formik.errors.name)}></TextInput>
            <TextInput label={"Apellidos"} style={formStyles.input}
                       onChangeText={(text) => formik.setFieldValue("lastname", text)}
                       value={formik.values.lastname}
                       error={Boolean(formik.errors.lastname)}></TextInput>
            <Button mode={"contained"}
                    style={formStyles.btnSuccess}
                    onPress={formik.handleSubmit}
                    loading={loading}>Cambiar
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
