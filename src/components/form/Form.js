import React, { useState, useContext } from 'react';
import { View, SafeAreaView, StyleSheet, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import { EMAIL_VALIDATE_REGEX } from '../../utils/constants';
import Header from '../appHeader/Header';
import { AuthContext } from '../../navigation/authProvider';
import { LOGIN, REGISTER } from '../../navigation/routePaths';
import PropTypes from 'prop-types';
import { VALID_EMAIL, EMPTY_PASSWORD } from "../../utils/error-constants";
import { Colors } from '../../assets/colors';
import Button from "../../components/button/Button";
import AppLogo from '../../assets/images/logo.png';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


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

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: Colors.white
    },
    container: {
        height: 400,
        justifyContent: 'flex-end',
        bottom:50,
        marginHorizontal: 16,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    appLogo: {
        width: 250,
        height: 250,
        alignSelf: 'center',
        marginTop: 50
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: Colors.white,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    textInput: {
        backgroundColor: Colors.ghostWhite,
        borderColor: Colors.grey,
        borderWidth: 0.2,
        borderRadius: 5,
        textAlign: 'center'
    },
    button: {
        marginTop: 20,
        backgroundColor: Colors.darkMegenda
    },
    info: {
        marginTop: 10,
        textAlign: 'center',
        fontSize: 13,
        fontWeight: 'bold',
        color: Colors.grey,
        textDecorationLine: 'underline'
    }
});

export default Form
