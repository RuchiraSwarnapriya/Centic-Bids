import React, { useEffect, useCallback } from 'react'
import { View, Text, } from 'react-native'
import { fetchIems } from '../../redux/actions/auctionItem'
import { USER } from '../../utils/constants'
import { useDispatch, useSelector } from 'react-redux';

const HomeScreen = ({ route, navigation }) => {

    const dispatch = useDispatch();

    const fetchInitialData = useCallback(async () => {
        await dispatch(fetchIems());
    }, [dispatch]);

    useEffect(() => {
        fetchInitialData();
    }, [fetchInitialData]);


    const walletBalance = useSelector(({ auctionItems }) => auctionItems.items.id);

    console.log("hello", walletBalance)
    const { role } = route.params;

    return (
        role == USER ?
            <View>
                <Text>USER Home Screen </Text>
            </View>
            :
            <View>
                <Text>GUEST Home Screen{walletBalance} </Text>
            </View>

    )
}

export default HomeScreen
