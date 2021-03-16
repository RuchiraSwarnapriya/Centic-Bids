import React, { useEffect, useCallback, useState } from 'react';
import { View, Text } from 'react-native';
import { fetchItems } from '../../redux/actions/auctionItem';
import { fetchUser } from '../../redux/actions/user';
import { useDispatch, useSelector } from 'react-redux';
import FlatListView from "../../components/flatListView/FlatlistView";
import auth from '@react-native-firebase/auth';
import Loader from "../../components/loader/Loader";
import styles from "./styles";



const HomeScreen = ({ navigation }) => {

    const user = auth().currentUser;

    console.log(user);

    const uid = user.uid;

    const [IsLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();

    const [IsRefreshing, setIsRefreshing] = useState(false);

    const [Time, setTime] = useState(new Date());

    // pull down and refreh app timer
    const refreshTime = () => {
        setIsRefreshing(true);
        fetchInitialData();
        setIsRefreshing(false);
    };

    //fetch bid items from databse
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


    // get data from redux store
    const auctionItemDetails = useSelector(({ auctionItems }) => auctionItems.items);

    console.log(auctionItemDetails)

    return (
        <View style={styles.main}>
            <Text style={styles.title}>Centic Bids</Text>
            {IsLoading ?
                <Loader />
                :
                <FlatListView navigation={navigation} data={auctionItemDetails} type="User" IsRefreshing={IsRefreshing} onRefresh={refreshTime} Time={Time} />
            }
        </View>
    )
}



export default HomeScreen
