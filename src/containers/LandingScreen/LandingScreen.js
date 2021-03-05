import React, { useEffect ,useCallback} from 'react'
import { View, Button, StyleSheet, SafeAreaView } from 'react-native'
import { LOGIN, HOME } from '../../navigation/routes/route_paths'
import { GUEST } from '../../utils/constants'


import HomeStack from '../../navigation/routes/HomeStack'

const LandingScreen = ({ navigation }) => {

    const LoginNavigatgion = () => navigation.navigate(LOGIN);
    
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
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

export default LandingScreen
