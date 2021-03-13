import React, { useState, useContext } from 'react';
import { View, SafeAreaView, Button, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import { EMAIL_VALIDATE_REGEX } from '../../utils/constants';
import Header from '../appHeader/Header';
import { AuthContext } from '../../navigation/AuthProvider';
import { LOGIN, REGISTER } from '../../navigation/routes/route_paths';
import PropTypes from 'prop-types';
import { VALID_EMAIL, EMPTY_PASSWORD } from "../../utils/error-constants";

const Form = ({ type, info, navigation }) => {

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const { register, login } = useContext(AuthContext);

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
            <View style={styles.container}>
                <TextInput style={styles.textInput} placeholder="Plase enter your email" keyboardType='email-address' onChangeText={value => setEmail(value)} />
                <View style={styles.separator} />
                <TextInput style={styles.textInput} placeholder="Plase enter your password" secureTextEntry={true} onChangeText={value => setPassword(value)} />
                <View style={styles.separator} />
                <Button
                    title={type}
                    color="#841584"
                    onPress={() => ValidateInputs()}
                />
                {type == "Login" &&
                    <TouchableOpacity  onPress={() => navigation.navigate(REGISTER)}><Text style={styles.info}>{info}</Text></TouchableOpacity>
                }
                {type == "Register" &&
                    <TouchableOpacity  onPress={() => navigation.navigate(LOGIN)}><Text style={styles.info}>{info}</Text></TouchableOpacity>
                }

            </View>
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
        flex: 1
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
    },
    info:{
        marginTop:10,
        textAlign: 'center',
        fontSize: 13,
        fontWeight: 'bold',
        color: 'grey',
        textDecorationLine:'underline'
    }
});

export default Form
