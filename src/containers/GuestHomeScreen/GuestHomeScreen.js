import React, { useEffect, useCallback, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fetchItems } from '../../redux/actions/auctionItem';
import { useSelector } from 'react-redux';
import FlatListView from "../../components/flatListView/FlatlistView";
import { useDispatch } from 'react-redux';
import Loader from "../../components/loader/Loader";
import { Colors } from '../../assets/colors'

const GuestHomeScreen = ({ navigation }) => {

    const dispatch = useDispatch();

    const [IsRefreshing, setIsRefreshing] = useState(false);

    const [Time, setTime] = useState(new Date());

    // pull down and refreh app timer
    const refreshTime = () => {
        setIsRefreshing(true);
        fetchInitialData();
        setIsRefreshing(false);
    };

    const [IsLoading, setIsLoading] = useState(true);

    // fetch bid items from database
    const fetchInitialData = useCallback(async () => {
        await dispatch(fetchItems());
        setTime(new Date());
    }, [dispatch]);

    useEffect(() => {
        setIsLoading(true);
        fetchInitialData();
        setIsLoading(false);
    }, [fetchInitialData]);

    const auctionItemDetails = useSelector(({ auctionItems }) => auctionItems.items);

    return (
        <View style={styles.main}>
            <Text style={styles.title}>Centic Bids</Text>
            { IsLoading ?
                <Loader />
                :
                <FlatListView navigation={navigation} data={auctionItemDetails} type="Guest" IsRefreshing={IsRefreshing} onRefresh={refreshTime} Time={Time}/>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.azure
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
        fontSize: 20,
        fontWeight: 'bold'
    },
});

export default GuestHomeScreen
