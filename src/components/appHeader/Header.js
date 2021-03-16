import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { Colors } from "../../assets/colors";


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

const styles = StyleSheet.create({

    headerContainer: {
        marginLeft: 10,
        marginTop: 10,
        marginRight: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold'
    },
   
});

export default Header