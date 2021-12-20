import React from "react";
import { TextInput,View } from "react-native";
import styles from './input.style'
const Input=({placeholder,onType})=>{
    return(
        <View style={styles.container}>
            <TextInput placeholder={placeholder} onChange={onType} />
        </View>
    )
}
export default Input;