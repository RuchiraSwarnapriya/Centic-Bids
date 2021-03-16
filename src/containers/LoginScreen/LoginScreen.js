import React from 'react';
import Form from "../../components/form/Form";

const LoginScreen = ({ navigation }) => {
    return (
        <Form type="Login" info="Haven't Registered yet, Register Here " navigation={navigation} />
    )
}

export default LoginScreen
