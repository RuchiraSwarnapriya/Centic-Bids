import React, { useEffect, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fetchItems } from '../../redux/actions/auctionItem';
import { useSelector } from 'react-redux';
import FlatListView from "../../components/flatListView/FlatlistView";
import { useDispatch } from 'react-redux';

const GuestHomeScreen = ({navigation}) => {

    const dispatch = useDispatch();

    const fetchInitialData = useCallback(async () => {
        await dispatch(fetchItems());
    }, [dispatch]);

    useEffect(() => {
        fetchInitialData();
    }, [fetchInitialData]);

    const auctionItemDetails = useSelector(({ auctionItems }) => auctionItems.items);

    return (
        <View style={styles.main}>
            <Text style={styles.title}>Ongoing Bids</Text>
            <FlatListView navigation={navigation} data={auctionItemDetails} type="Guest" />
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
