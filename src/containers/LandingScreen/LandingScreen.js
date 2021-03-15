import React from 'react';
import { View, StyleSheet, SafeAreaView, Image } from 'react-native';
import { LOGIN, GUESTHOME } from '../../navigation/routePaths';
import { Colors } from "../../assets/colors";
import AppLogo from "../../assets/images/logo.png";
import Button from "../../components/button/Button";


const LandingScreen = ({ navigation }) => {

    //navigate to login page
    const LoginNavigatgion = () => navigation.navigate(LOGIN);

    //navigate to guest home page
    const GuestNavigation = () => navigation.navigate(GUESTHOME);

    return (
        <SafeAreaView style={styles.container}>
            <Image source={AppLogo} style={styles.logo}></Image>
            <View>
                <Button
                    title="Login"
                    buttonStyle={styles.loginButton}
                    onPress={LoginNavigatgion}
                />
                <View style={styles.separator}></View>
                <Button
                    title="Guest"
                    buttonStyle={styles.guestButton}
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
        paddingHorizontal: 16,
        paddingBottom: 50,
        backgroundColor: Colors.white
    },
    separator: {
        alignSelf: 'center',
        width: 250,
        marginVertical: 10,
        borderBottomColor: Colors.darkGrey,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    logo: {
        justifyContent: 'flex-start',
        alignSelf: 'center',
        width: 300,
        height: 300,
        bottom: 100
    },
    loginButton: {
        backgroundColor: Colors.darkMegenda
    },
    guestButton: {
        backgroundColor: Colors.green
    }
});

export default LandingScreen
