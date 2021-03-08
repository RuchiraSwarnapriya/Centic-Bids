import React, { useEffect, useCallback } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { fetchItems } from '../../redux/actions/auctionItem'
import { fetchUser } from '../../redux/actions/user';
import { useSelector } from 'react-redux'
import FlatListView from "../../components/flatListView/FlatlistView";
import { useDispatch } from 'react-redux';
import auth from '@react-native-firebase/auth';



const HomeScreen = ({ navigation }) => {

    const user = auth().currentUser;

    const uid = user.uid;

    const dispatch = useDispatch();

    const fetchInitialData = useCallback(async () => {
        await dispatch(fetchItems());
        await dispatch(fetchUser(uid));
    }, [dispatch]);

    useEffect(() => {
        fetchInitialData();
    }, [fetchInitialData]);

    const auctionItemDetails = useSelector(({ auctionItems }) => auctionItems.items);

    const fcmToken = useSelector(({ currentUser }) => currentUser.user.fcmToken);

    return (
        <View style={styles.main}>
            <Text style={styles.title}>Ongoing Bids</Text>
            <FlatListView navigation={navigation} data={auctionItemDetails} type="User" token={fcmToken} />
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
