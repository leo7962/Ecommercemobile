import React, {useCallback, useState} from 'react';
import {StyleSheet, View} from "react-native";
import {TextInput, Button} from "react-native-paper";
import {getMeApi, updateUserApi} from "../../api/user";
import useAuth from "../../hooks/useAuth";
import {useFocusEffect, useNavigation} from "@react-navigation/native";
import {useFormik} from "formik";
import * as Yup from "yup";
import Toast from "react-native-root-toast";
import {formStyles} from "../../styles";

export default function ChangeEmail() {
    const {auth} = useAuth();
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    useFocusEffect(
        useCallback(() => {
            (async () => {
                const response = await getMeApi(auth.token);
                await formik.setFieldValue("email", response.email);
            })()
        }, [])
    );

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
            setLoading(true);
            try {
                const response = await updateUserApi(auth, formData);
                if (response.statusCode) throw "El email ya existe";
                navigation.goBack();
            } catch (error: any) {
                Toast.show(error, {
                    position: Toast.positions.CENTER
                });
                formik.setFieldError("email", true);
                setLoading(false);
            }
        }
    });

    return (
        <View style={styles.container}>
            <TextInput label={"Email"} style={formStyles.input}
                       onChangeText={(text) => formik.setFieldValue("email", text)}
                       value={formik.values.email}
                       error={Boolean(formik.errors.email)}
                       keyboardType={"email-address"}
                       autoCapitalize="none"/>
            <Button mode={"contained"} style={formStyles.btnSuccess} onPress={formik.handleSubmit} loading={loading}>Cambiar email</Button>
        </View>
    );
}

function initialValues() {
    return {
        email: ""
    }
}

function validationSchema() {
    return {
        email: Yup.string().email().required(),
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
});
