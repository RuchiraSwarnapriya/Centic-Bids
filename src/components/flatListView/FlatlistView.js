import React from 'react';
import { View, Text, FlatList, RefreshControl } from 'react-native'
import { BIDDING } from '../../navigation/routePaths';
import ImageSlider from "../imageSlider/ImageSlider";
import CountDowner from "../countDowner/CountDowner";
import { BID_TIME_OVER, REGISTER } from "../../utils/alert-constants";
import Button from "../../components/button/Button";
import styles from "./styles";


const FlatlistView = ({ navigation, data, type, IsRefreshing, onRefresh, Time }) => {

    // navigate to bidding screen
    const bidNow = (item) => navigation.navigate(BIDDING, {
        id: item.id,
        title: item.title,
        description: item.description,
        basePrice: item.basePrice,
        currentBid: item.currentBid,
        expTime: item.expTime.seconds,
        images: item.images
    });

    const cTime = Time;

    // alert for unrigestered user
    const alertDisplay = () => {
        alert(REGISTER);
    };

    // alert when bid time is over
    const bidOver = () => {
        alert(BID_TIME_OVER);
    };

    const Card = ({ item }) => {

        const expTime = item.expTime.seconds;

        const currentTime = cTime.getTime() / 1000;

        const remaningTime = expTime - currentTime;

        return (
            <View style={styles.card}>
                <View style={styles.cardDetails}>
                    <View style={styles.carouselContainer}>
                        <ImageSlider images={item.images} />
                    </View>
                    <View style={styles.itemDetails}>
                        <Text style={styles.itemTitle}>{item.title}</Text>
                        <Text style={styles.itemDescription}>{item.description}</Text>
                        <View style={styles.priceContainer}>
                            <View style={styles.priceAmount}>
                                <Text style={styles.baseprice}>{item.basePrice}$</Text>
                                <Text style={styles.palceHolder}>Base Price</Text>
                            </View>
                            <View style={styles.priceAmount}>
                                <Text style={styles.bidPrice}>{item.currentBid}$</Text>
                                <Text style={styles.palceHolder}>Current Bid</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.buttonAndTimer}>
                    <View style={styles.timerContainer}>
                        <CountDowner remaningTime={remaningTime} size={12} />
                        <Text style={styles.palceHolder}>Remaning Time</Text>
                    </View>
                    {remaningTime <= 0 ?
                        <Button title="Bid Now" buttonStyle={styles.overButton} onPress={() => bidOver()} />
                        : type == "User" ?
                            <Button title="Bid Now" buttonStyle={styles.normalButton} onPress={() => bidNow(item)} />
                            :
                            <Button title="Bid Now" buttonStyle={styles.disabledButton} onPress={() => alertDisplay()} />
                    }
                </View>
            </View >
        )
    };

    return (
        <FlatList data={data} renderItem={Card} keyExtractor={item => item.id} refreshControl={<RefreshControl refreshing={IsRefreshing} onRefresh={onRefresh} />} />
    )
}


export default FlatlistView