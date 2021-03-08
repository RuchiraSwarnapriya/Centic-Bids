import React, { useEffect, useCallback, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fetchItems } from '../../redux/actions/auctionItem';
import { useSelector } from 'react-redux';
import FlatListView from "../../components/flatListView/FlatlistView";
import { useDispatch } from 'react-redux';
import Loader from "../../components/loader/Loader";

const GuestHomeScreen = ({ navigation }) => {

    const dispatch = useDispatch();

    const [IsLoading, setIsLoading] = useState(true);

    const fetchInitialData = useCallback(async () => {
        await dispatch(fetchItems());
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
            { IsLoading ?
                <Loader />
                :
                <FlatListView navigation={navigation} data={auctionItemDetails} type="Guest" />
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

export default GuestHomeScreen
