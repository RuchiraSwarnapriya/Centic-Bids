import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { Colors } from "../../assets/colors";
import styles from './styles'


const Header = ({navigation, title}) => { 
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <IonIcon name="chevron-back" size={25} color={Colors.black} />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default Header