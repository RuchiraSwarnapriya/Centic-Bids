import React from 'react';
import { View, Button, StyleSheet, SafeAreaView } from 'react-native';
import { LOGIN, GUESTHOME } from '../../navigation/routes/route_paths';
import { Colors } from "../../assets/colors";


const LandingScreen = ({ navigation }) => {

    const LoginNavigatgion = () => navigation.navigate(LOGIN);

    const GuestNavigation = () => navigation.navigate(GUESTHOME);
    
    return (
        <SafeAreaView style={styles.container}>
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
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: Colors.darkGrey,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

export default LandingScreen
