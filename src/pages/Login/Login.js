import React   from "react";
import { View,SafeAreaView,Text, TextInput,Image } from "react-native";
import Button from "../../components/Button";
import Input from "../../components/input/input";
import styles from './Login.style';

const  Login=()=>{
    return(
            <SafeAreaView style={styles.container}>
                <View style={styles.logo_container}>
                    <Image style={styles.logo} source={require("../../asstes/login-logo.png")} />
                </View>
                <View style={styles.body_container}>
                    <Input placeholder="Kullanıcı adınızı giriniz.."/>
                    <Input placeholder="Şifrenizi giriniz.."/>
                    <Button text="Giriş Yap"/>

                </View>
            </SafeAreaView>
    )
}
export default Login;