import React from "react";
import { View, SafeAreaView, Text, TextInput, Image, Alert } from "react-native";
import Button from "../../components/Button";
import Input from "../../components/input/input";
import styles from './Login.style';
import { Formik } from "formik";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import usePost from "../../hooks/usePost/usePost";
import Config from "react-native-config";
const Login = ({ navigation }) => {
    const { error, loading, data, postData } = usePost();
    function hanleLogin(values) {
        postData(Config.API_AUTH_URL + "/login", values);
        if (error) {
            Alert.alert('Dükkan', 'Hata oluştu!')
        }
        if(data){
            if(data.status==='Error')
            {
                Alert.alert("Dükkan","Kullanıcı bulunamadı!");
            }
        }else{
            navigation.navigate('ProductsPage')
        }
        console.log(data)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
                <Image style={styles.logo} source={require("../../asstes/login-logo.png")} />
            </View>
            <Formik initialValues={{ username: '', password: '' }} onSubmit={hanleLogin}>
                {({ handleChange, handleSubmit, values }) => (
                    <View style={styles.body_container}>
                        <Input value={values.username} onType={handleChange('username')} iconName="key" placeholder="Kullanıcı adınızı giriniz.." />
                        <Input value={values.password} onType={handleChange('password')} iconName="account" placeholder="Şifrenizi giriniz.." isSecure />
                        <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
                    </View>
                )}
            </Formik>
        </SafeAreaView>
    )
}
export default Login;