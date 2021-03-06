import React, { useEffect, useCallback } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { fetchItems } from '../../redux/actions/auctionItem'
import { useSelector } from 'react-redux'
import FlatListView from "../../components/FlatListView";
import { useDispatch } from 'react-redux'
import { fetchUser } from '../../redux/actions/user';


const HomeScreen = ({ navigation }) => {

    const dispatch = useDispatch();

    const fetchInitialData = useCallback(async () => {
        dispatch(fetchItems());
        dispatch(fetchUser());
    }, [dispatch]);

    useEffect(() => {
        fetchInitialData();
    }, [fetchInitialData]);

    const auctionItemDetails = useSelector(({ auctionItems }) => auctionItems.items);

    const fcmToken = useSelector (({currentUser}) => currentUser.user.fcmToken);

    return (
        <View style={styles.main}>
            <Text style={styles.title}>Ongoing Bids</Text>
            <FlatListView navigation={navigation} data={auctionItemDetails} type="User"  token ={fcmToken} />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
        fontSize: 20,
        fontWeight: 'bold'
    },
});

export default HomeScreen
