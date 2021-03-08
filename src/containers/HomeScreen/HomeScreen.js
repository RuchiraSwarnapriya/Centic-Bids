import React, { useEffect, useCallback, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fetchItems } from '../../redux/actions/auctionItem';
import { fetchUser } from '../../redux/actions/user';
import { useDispatch, useSelector } from 'react-redux';
import FlatListView from "../../components/flatListView/FlatlistView";
import auth from '@react-native-firebase/auth';
import Loader from "../../components/loader/Loader";



const HomeScreen = ({ navigation }) => {

    const user = auth().currentUser;

    const uid = user.uid;

    const [IsLoading, setIsLoading] = useState(true);

    const dispatch = useDispatch();

    const fetchInitialData = useCallback(async () => {
        await dispatch(fetchItems());
        await dispatch(fetchUser(uid));
    }, [dispatch]);

    useEffect(() => {
        setIsLoading(true);
        fetchInitialData();
        setIsLoading(false);
    }, [fetchInitialData]);

    const auctionItemDetails = useSelector(({ auctionItems }) => auctionItems.items);

    return (
        <View style={styles.main}>
            <Text style={styles.title}>Ongoing Bids</Text>
            {IsLoading ?
                <Loader />
                :
                <FlatListView navigation={navigation} data={auctionItemDetails} type="User" />
            }
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
