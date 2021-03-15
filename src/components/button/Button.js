import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from "../../assets/colors";

const Button = ({ title, buttonStyle, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, { ...buttonStyle }]}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    button: {
        alignSelf: 'center',
        width: 300,
        height: 40,
        backgroundColor: Colors.grey,
        borderRadius: 20,
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Colors.white,
        textTransform: 'uppercase'
    }

});


export default Button
