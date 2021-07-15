import React from 'react';
import {StatusBar, SafeAreaView} from "react-native";

export default function StatusBars(props: any) {
    const {backgroudColor, ...rest} = props;
    return (
        <>
            <StatusBar backgroundColor={backgroudColor} {...rest}/>
            <SafeAreaView style={{flex: 0, backgroundColor: backgroudColor}}/>
        </>
    );
}
