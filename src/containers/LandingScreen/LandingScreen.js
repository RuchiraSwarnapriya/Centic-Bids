import React from 'react';
import { View, SafeAreaView, Image } from 'react-native';
import { LOGIN, GUESTHOME } from '../../navigation/routePaths';
import AppLogo from "../../assets/images/logo.png";
import Button from "../../components/button/Button";
import styles from "./styles";


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


export default LandingScreen
