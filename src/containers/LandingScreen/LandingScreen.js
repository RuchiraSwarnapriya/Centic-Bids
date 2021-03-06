import React, { useEffect ,useCallback} from 'react'
import { View, Button, StyleSheet, SafeAreaView } from 'react-native';
import { LOGIN, GUESTHOME } from '../../navigation/routes/route_paths';


const LandingScreen = ({ navigation }) => {

    const LoginNavigatgion = () => navigation.navigate(LOGIN);

    const GuestNavigation = () => navigation.navigate(GUESTHOME);
    
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Button
                    title="Login"
                    color="#841584"
                    onPress={LoginNavigatgion}
                />
                <View style={styles.separator}></View>
                <Button
                    title="Guest"
                    color="green"
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
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

export default LandingScreen
