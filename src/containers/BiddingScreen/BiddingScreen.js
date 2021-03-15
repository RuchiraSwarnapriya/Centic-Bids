import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, Alert } from 'react-native';
import Header from "../../components/appHeader/Header";
import { fetchItems } from '../../redux/actions/auctionItem';
import { updateItemDetails } from "../../services/auctionItems";
import { HOME } from '../../navigation/routePaths';
import { useDispatch, useSelector } from 'react-redux';
import CountDowner from "../../components/countDowner/CountDowner";
import ImageSlider from '../../components/imageSlider/ImageSlider';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { BID_TIME_OVER, BID_AMOUNT_EMPTY, BID_AMOUNT_GREATER, BID_CONFIRMATION, BID_PLACED } from "../../utils/alert-constants";
import { Colors } from "../../assets/colors";
import Button from "../../components/button/Button";


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
        alert(BID_TIME_OVER);
    };

    const verifyBid = () => {

        if (MyBid == 0 || null) {
            alert(BID_AMOUNT_EMPTY);
        }
        else if (MyBid <= currentBid) {
            alert(BID_AMOUNT_GREATER);
        }
        else {
            confirmBid();
        }

    };

    const confirmBid = () => {
        Alert.alert("Confirmation", BID_CONFIRMATION, [
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
        alert(BID_PLACED);
        dispatch(fetchItems());
        navigation.navigate(HOME);
    };

    return (
        <SafeAreaView style={styles.main}>
            <Header title={title} navigation={navigation} />
            <KeyboardAwareScrollView style={styles.container}>
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
                    <Button title="Place Bid" buttonStyle={styles.bidButton} onPress={() => bidOver()} />
                    :
                    <Button title="Place Bid" buttonStyle={styles.bidButton} onPress={() => verifyBid()} />
                }
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: Colors.white
    },
    container: {
        flex: 1,
        marginHorizontal: 16,
        marginBottom: 10
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
        color: Colors.black,
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
        color: Colors.grey
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
        borderBottomColor: Colors.grey,
        borderBottomWidth: 1,
        fontSize: 25,
        fontWeight: 'bold'
    },
    bidButton: {
        width: 300,
        height: 40,
        backgroundColor: Colors.green,
        alignSelf: 'center',
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default BiddingScreen
