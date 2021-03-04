import React, { useState } from 'react'
import { View, SafeAreaView, Button, StyleSheet, TextInput, Text } from 'react-native'
import { HOME } from '../../routes/route_paths'
import { USER, EMAIL_VALIDATE_REGEX } from '../../utils/constants'
import Header from '../../components/header/Header'


const LoginScreen = ({ navigation }) => {

    const HomeNavigation = () => navigation.navigate(HOME, { role: USER });

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const ValidateInputs = () =>{

         if(!EMAIL_VALIDATE_REGEX.test(Email)){
             alert("Enter Valid Email")
         }
         else if (!Password.trim()){
             alert("Password cannot be empty")
         }
         else {
             HomeNavigation();
         }

    }


    return (
        <SafeAreaView style={styles.main}>
            <Header title = "Login" navigation = {navigation}/>
            <View style={styles.container}>
                <TextInput style={styles.textInput} placeholder="Plase enter your email" keyboardType='email-address' onChangeText={value=> setEmail(value)} />
                <View style={styles.separator} />
                <TextInput style={styles.textInput} placeholder="Plase enter your password" secureTextEntry = {true} onChangeText={value => setPassword(value)}/>
                <View style={styles.separator} />
                <Button
                    title="Login"
                    color="#841584"
                    onPress={ValidateInputs}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main:{
        flex:1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    textInput: {
        backgroundColor: '#C0C0C0'
    }
});

export default LoginScreen
