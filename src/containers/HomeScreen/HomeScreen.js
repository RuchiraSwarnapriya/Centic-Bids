import React, { useEffect, useState, useCallback } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { fetchItems } from '../../redux/actions/auctionItem'
import { Card } from "../../components/Card/Card"
import { useSelector } from 'react-redux'
import { BIDDING } from '../../navigation/routes/route_paths'
import { useDispatch } from 'react-redux'


const HomeScreen = ({ navigation }) => {

    const dispatch = useDispatch();

    const fetchInitialData = useCallback(async () => {
        await dispatch(fetchItems());
    }, [dispatch]);

    useEffect(() => {
        fetchInitialData();
    }, [fetchInitialData]);

    const bidNow = (item) => navigation.navigate(BIDDING, {
        title: item.title,
        description: item.body,
        // baseprice: item.baseprice,
        // currentBid: item.currentBid,
        // timer:item.remaningTime
        basePrice: '100$',
        currentBid: 150,
        timer: '20 Min',
    });

    const auctionItemDetails = useSelector(({ auctionItems }) => auctionItems.items);

    return (
        <View style={styles.main}>
            <Text style={styles.title}>Ongoing Bids</Text>
            <FlatList data={auctionItemDetails} renderItem={Card} keyExtractor={item => item.id} />
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
