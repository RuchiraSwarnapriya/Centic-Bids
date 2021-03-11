import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView } from 'react-native';
import Header from "../../components/appHeader/Header";
import { fetchItems } from '../../redux/actions/auctionItem';
import { updateItemDetails } from "../../services/auctionItems";
import { HOME } from '../../navigation/routes/route_paths';
import { useDispatch, useSelector } from 'react-redux';
import CountDowner from "../../components/countDowner/CountDowner";
import ImageSlider from '../../components/imageSlider/ImageSlider';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const BiddingScreen = ({ route, navigation }) => {

    const { title, description, basePrice, currentBid, expTime, images } = route.params;

    const dispatch = useDispatch();

    const [CurrentBid, setCurrentBid] = useState(currentBid);

    const [MyBid, setMyBid] = useState('');

    const fcmToken = useSelector(({ currentUser }) => currentUser.user.fcmToken);

    const bidderID = useSelector(({ currentUser }) => currentUser.user.id);

    const currentTime = new Date().getTime() / 1000;

    const remaningTime = expTime - currentTime;

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
        alert("You have successfully placed bid for this item");
        dispatch(fetchItems());
        navigation.navigate(HOME);
    };

    return (
        <SafeAreaView style={styles.main}>
            <Header title={title} navigation={navigation} />
            <KeyboardAwareScrollView  style={styles.container}>
                <View style={styles.carouselContainer}>
                    <ImageSlider images={images} imageStyle={styles.itemImage} />
                </View>
                <Text style={styles.description}>{description}</Text>
                <View style={styles.detailContainer}>
                    <View>
                        <Text style={styles.currentBid}>{basePrice}$</Text>
                        <Text style={[styles.placeHolder]}>Base Price</Text>
                    </View>
                    <View>
                        <Text style={styles.currentBid}>{CurrentBid}$</Text>
                        <Text style={styles.placeHolder}>Current Bid</Text>
                    </View>
                </View>
                <View style={styles.timerContainer}>
                    <CountDowner remaningTime={remaningTime} size={15} />
                    <Text style={[styles.placeHolder]}>Remaining Time</Text>
                </View>
                <TextInput style={styles.textInput} placeholder="Place your Bid here" keyboardType='numeric' onChangeText={value => setMyBid(value)} />
                {remaningTime <= 0 ?
                    <TouchableOpacity style={styles.bidButton} onPress={() => bidOver()}>
                        <Text style={styles.bidButtonText}>PLACE BID</Text>
                    </TouchableOpacity> :
                    <TouchableOpacity style={styles.bidButton} onPress={() => verifyBid()}>
                        <Text style={styles.bidButtonText}>PLACE BID</Text>
                    </TouchableOpacity>
                }
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    container: {
        flex: 1,
        marginHorizontal: 16,
        marginBottom:10
    },
    carouselContainer: {
        alignSelf: 'center',
        position: 'relative',
        top: 10,
        height: 200,
        width: 350,
    },
    itemImage: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
        width: 330,
        height: 150,
        borderRadius: 5
    },
    description: {
        marginTop: 30,
        fontSize: 15,
        color: 'black',
        textAlign: 'center'
    },
    detailContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline'
    },
    currentBid: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold'
    },
    placeHolder: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        color: 'grey'
    },
    timerContainer: {
        marginTop: -35,
        alignItems: 'center'
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
        marginTop: 30,
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
