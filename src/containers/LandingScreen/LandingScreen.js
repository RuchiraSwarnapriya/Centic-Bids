import React, { useEffect ,useCallback} from 'react'
import { View, Button, StyleSheet, SafeAreaView } from 'react-native'
import { LOGIN, HOME } from '../../routes/route_paths'
import { GUEST } from '../../utils/constants'
import { fetchItems } from '../../redux/actions/auctionItem'
import { useDispatch } from 'react-redux'

const LandingScreen = ({ navigation }) => {

    const dispatch = useDispatch();

    const fetchInitialData = useCallback(async () => {
        await dispatch(fetchItems());
    }, [dispatch]);

    useEffect(() => {
        fetchInitialData();
    }, [fetchInitialData]);

    const LoginNavigatgion = () => navigation.navigate(LOGIN);
    
    const HomeNavigation = () => navigation.navigate(HOME , {role : GUEST});

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
                    onPress={HomeNavigation}
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
