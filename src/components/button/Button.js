import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from "./styles";

const Button = ({ title, buttonStyle, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, { ...buttonStyle }]}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button
