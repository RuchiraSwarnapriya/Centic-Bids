import React from 'react'
import { Text, View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { Colors } from "../../assets/colors";

const window = Dimensions.get('window');

const Header = ({navigation, title}) => { 
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <IonIcon name="chevron-back" size={(window.width) * 0.06} color={Colors.black} />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    headerContainer: {
        marginLeft: (window.width) * 0.02,
        marginTop: (window.width) * 0.02,
        marginRight: (window.width) * 0.04,
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