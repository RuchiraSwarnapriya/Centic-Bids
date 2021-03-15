import React from 'react';
import { View, Button, StyleSheet, SafeAreaView, Image } from 'react-native';
import { LOGIN, GUESTHOME } from '../../navigation/routePaths';
import { Colors } from "../../assets/colors";
import AppLogo from "../../assets/images/logo.png";


const LandingScreen = ({ navigation }) => {

    const LoginNavigatgion = () => navigation.navigate(LOGIN);

    const GuestNavigation = () => navigation.navigate(GUESTHOME);
    
    return (
        <SafeAreaView style={styles.container}>
            <Image source ={AppLogo} style={styles.logo}></Image>
            <View>
                <Button
                    title="Login"
                    color={Colors.darkMegenda}
                    onPress={LoginNavigatgion}
                />
                <View style={styles.separator}></View>
                <Button
                    title="Guest"
                    color={Colors.green}
                    onPress={GuestNavigation}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal:16,
        paddingBottom:50,
        backgroundColor: Colors.white
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: Colors.darkGrey,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    logo:{
        justifyContent:'flex-start',
        alignSelf:'center',
        width:300,
        height:300,
        bottom:150
    }
});

export default LandingScreen
