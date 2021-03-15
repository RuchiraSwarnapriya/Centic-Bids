import React, { useEffect, useCallback, useState } from 'react';
import { View, Text, StyleSheet, RefreshControl } from 'react-native';
import { fetchItems } from '../../redux/actions/auctionItem';
import { fetchUser } from '../../redux/actions/user';
import { useDispatch, useSelector } from 'react-redux';
import FlatListView from "../../components/flatListView/FlatlistView";
import auth from '@react-native-firebase/auth';
import Loader from "../../components/loader/Loader";
import { Colors } from '../../assets/colors'



const HomeScreen = ({ navigation }) => {

    const user = auth().currentUser;

    console.log(user);

    const uid = user.uid;

    const [IsLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();

    const [IsRefreshing, setIsRefreshing] = useState(false);

    const [Time, setTime] = useState(new Date());

    const refreshTime = () => {
        setIsRefreshing(true);
        fetchInitialData();
        setIsRefreshing(false);
    };

    const fetchInitialData = useCallback(async () => {
        await dispatch(fetchItems());
        await dispatch(fetchUser(uid));
        setTime(new Date());
    }, [dispatch]);

    useEffect(() => {
        setIsLoading(true);
        fetchInitialData();
        setIsLoading(false);
    }, [fetchInitialData]);


    const auctionItemDetails = useSelector(({ auctionItems }) => auctionItems.items);

    console.log(auctionItemDetails)

    return (
        <View style={styles.main}>
            <Text style={styles.title}>Ongoing Bids</Text>
            {IsLoading ?
                <Loader />
                :
                <FlatListView navigation={navigation} data={auctionItemDetails} type="User" IsRefreshing={IsRefreshing} onRefresh={refreshTime} Time={Time} />
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

export default HomeScreen
