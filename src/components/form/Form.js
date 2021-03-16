import React, { useState, useContext } from 'react';
import { View, SafeAreaView, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import { EMAIL_VALIDATE_REGEX } from '../../utils/constants';
import Header from '../appHeader/Header';
import { AuthContext } from '../../navigation/authProvider';
import { LOGIN, REGISTER } from '../../navigation/routePaths';
import PropTypes from 'prop-types';
import { VALID_EMAIL, EMPTY_PASSWORD } from "../../utils/error-constants";
import Button from "../../components/button/Button";
import AppLogo from '../../assets/images/logo.png';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from "./styles";


const Form = ({ type, info, navigation }) => {

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const { register, login } = useContext(AuthContext);

    // validate input fileds and login or register
    const ValidateInputs = () => {

        if (!EMAIL_VALIDATE_REGEX.test(Email)) {
            alert(VALID_EMAIL);
        }
        else if (!Password.trim()) {
            alert(EMPTY_PASSWORD);
        }
        else {
            if (type == "Login") {
                login(Email, Password);
            } else if (type == "Register") {
                register(Email, Password);
            }
        }

    }

    return (
        <SafeAreaView style={styles.main}>
            <Header title={type} navigation={navigation} />
            <KeyboardAwareScrollView style={styles.main}>
                <Image source={AppLogo} style={styles.appLogo}></Image>
                <View style={styles.container}>
                    <TextInput style={styles.textInput} placeholder="Plase enter your email" keyboardType='email-address' onChangeText={value => setEmail(value)} />
                    <View style={styles.separator} />
                    <TextInput style={styles.textInput} placeholder="Plase enter your password" secureTextEntry={true} onChangeText={value => setPassword(value)} />
                    <View style={styles.separator} />
                    <Button
                        title={type}
                        buttonStyle={styles.button}
                        onPress={() => ValidateInputs()}
                    />
                    {type == "Login" &&
                        <TouchableOpacity onPress={() => navigation.navigate(REGISTER)}><Text style={styles.info}>{info}</Text></TouchableOpacity>
                    }
                    {type == "Register" &&
                        <TouchableOpacity onPress={() => navigation.navigate(LOGIN)}><Text style={styles.info}>{info}</Text></TouchableOpacity>
                    }

                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

Form.propTypes = {
    type: PropTypes.string,
    info: PropTypes.string,
    navigation: PropTypes.any
};


export default Form
