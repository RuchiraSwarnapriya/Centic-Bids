import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, Alert } from 'react-native';
import Header from "../../components/appHeader/Header";
import { fetchItems } from '../../redux/actions/auctionItem';
import { updateItemDetails } from "../../services/auctionItems";
import { HOME } from '../../navigation/routePaths';
import { useDispatch, useSelector } from 'react-redux';
import CountDowner from "../../components/countDowner/CountDowner";
import ImageSlider from '../../components/imageSlider/ImageSlider';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { BID_TIME_OVER, BID_AMOUNT_EMPTY, BID_AMOUNT_GREATER, BID_CONFIRMATION, BID_PLACED } from "../../utils/alert-constants";
import Button from "../../components/button/Button";
import styles from "./styles";


const BiddingScreen = ({ route, navigation }) => {

    const { title, description, basePrice, currentBid, expTime, images } = route.params;

    const dispatch = useDispatch();

    const [CurrentBid, setCurrentBid] = useState(currentBid);

    const [MyBid, setMyBid] = useState('');

    const fcmToken = useSelector(({ currentUser }) => currentUser.user.fcmToken);

    const bidderID = useSelector(({ currentUser }) => currentUser.user.id);

    const currentTime = new Date().getTime() / 1000;

    const remaningTime = expTime - currentTime;

    // alert for when bid time is over
    const bidOver = () => {
        alert(BID_TIME_OVER);
    };

    // check bid value matching for conditons
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

    // confirmation of the bid
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

    // place bid and navigate to home screen
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


export default BiddingScreen
