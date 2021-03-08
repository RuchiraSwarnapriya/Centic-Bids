import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Alert } from 'react-native';
import Header from "../../components/appHeader/Header";
import { fetchItems } from '../../redux/actions/auctionItem';
import { updateItemDetails } from "../../services/auctionItems";
import { HOME } from '../../navigation/routes/route_paths';
import { useDispatch, useSelector } from 'react-redux';
import CountDowner from "../../components/countDowner/CountDowner";


const BiddingScreen = ({ route, navigation }) => {

    const { title, description, basePrice, currentBid, expTime } = route.params;

    const dispatch = useDispatch();

    const [CurrentBid, setCurrentBid] = useState(currentBid);

    const [BidButtonStatus, setBidButtonStatus] = useState(true);

    const [MyBid, setMyBid] = useState('');

    const fcmToken = useSelector(({ currentUser }) => currentUser.user.fcmToken);

    const bidderID = useSelector(({ currentUser }) => currentUser.user.id);

    const currentTime = new Date().getTime() / 1000;

    const remaningTime = expTime - currentTime

    const timeOver = () => {
        setBidButtonStatus(false)
    };

    const bidOver = () => {
        alert('You cannot place a bid for this item at the moment now because time is over ');
    };

    const verifyBid = () => {

        if (MyBid == 0 || null) {
            alert('Bid amout cannot be empty');
        }
        else if (MyBid <= currentBid) {
            alert('Bid amount should be greater than current bid');
        }
        else {
            confirmBid();
        }

    };

    const confirmBid = () => {
        Alert.alert("Confirmation", "Are you sure to place this order ?", [
            {
                text: "No",
                onPress: () => null,
                style: "cancel"
            },
            { text: "YES", onPress: () => placeBid() }
        ]);
    };

    const placeBid = () => {
        setCurrentBid(MyBid);
        console.log(MyBid)
        updateItemDetails("001", MyBid, fcmToken, bidderID);
        dispatch(fetchItems());
        navigation.navigate(HOME);
    };

    return (
        <SafeAreaView style={styles.main}>
            <Header title="BID Here" navigation={navigation} />
            <View style={styles.container}>
                <Text style={styles.currentBid}>{CurrentBid}$</Text>
                <Text style={styles.placeHolder}>Current Bid</Text>
                <View style={styles.timerContainer}>
                    <CountDowner remaningTime={remaningTime} onFinish={timeOver} size={15} />
                    <Text style={[styles.placeHolder, { fontSize: 12 }]}>Remaining Time</Text>
                </View>
                <View style={styles.detailContainer}>

                    {/* <View>
                        <Text style={styles.timer}>{basePrice}$</Text>
                        <Text style={[styles.placeHolder, { fontSize: 12 }]}>Base Price</Text>
                    </View> */}
                </View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
                <TextInput style={styles.textInput} placeholder="Place your bid here" keyboardType='numeric' onChangeText={value => setMyBid(value)} />
                {BidButtonStatus ?
                    <TouchableOpacity style={styles.bidButton} onPress={() => verifyBid()}>
                        <Text style={styles.bidButtonText}>PLACE BID</Text>
                    </TouchableOpacity> :
                    <TouchableOpacity style={styles.bidButton} onPress={() => bidOver()}>
                        <Text style={styles.bidButtonText}>PLACE BID</Text>
                    </TouchableOpacity>
                }
            </View>
        </SafeAreaView>
    )


}

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    container: {
        flex: 1,
        marginHorizontal: 16,
    },
    currentBid: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 50,
        fontWeight: 'bold'
    },
    placeHolder: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'grey'
    },
    timerContainer: {
        marginTop: 20,
        alignItems: 'center'
    },
    timer: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
    },
    title: {
        marginTop: 15,
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black'
    },
    description: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 14,
        color: 'black'
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    textInput: {
        alignSelf: 'center',
        width: 300,
        textAlign: 'center',
        marginTop: 20,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        fontSize: 25,
        fontWeight: 'bold'
    },
    bidButton: {
        width: 300,
        height: 40,
        backgroundColor: 'green',
        alignSelf: 'center',
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bidButtonText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 15
    },
});

export default BiddingScreen
