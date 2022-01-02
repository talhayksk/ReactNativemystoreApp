import React from "react";
import { TextInput,View } from "react-native";
import styles from './input.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const Input=({placeholder,value,onType,iconName,isSecure})=>{
    return(
        <View style={styles.container}>
            <TextInput placeholder={placeholder} value={value} style={styles.input} onChangeText={onType} secureTextEntry={isSecure}/>
            <Icon name={iconName} size={25} color="gray" />
        </View>
    )
}
export default Input;