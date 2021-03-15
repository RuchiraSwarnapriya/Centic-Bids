import React from 'react';
import { View, Text, FlatList, StyleSheet, RefreshControl } from 'react-native'
import { BIDDING } from '../../navigation/routePaths';
import ImageSlider from "../imageSlider/ImageSlider";
import CountDowner from "../countDowner/CountDowner";
import { BID_TIME_OVER, REGISTER } from "../../utils/alert-constants";
import { Colors } from "../../assets/colors";
import Button from "../../components/button/Button";


const FlatlistView = ({ navigation, data, type, IsRefreshing, onRefresh, Time }) => {

    const bidNow = (item) => navigation.navigate(BIDDING, {
        title: item.title,
        description: item.description,
        basePrice: item.basePrice,
        currentBid: item.currentBid,
        expTime: item.expTime.seconds,
        images: item.images
    });

    const cTime = Time;

    const alertDisplay = () => {
        alert(REGISTER);
    };

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

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.white,
        width: 370,
        marginTop: 10,
        shadowColor: Colors.black,
        elevation: 2,
        borderRadius: 10,
        marginBottom: 20
    },
    cardDetails: {
        flexDirection: 'row'
    },
    carouselContainer: {
        position: 'relative',
        top: 10,
        height: 150,
        width: 150,
    },
    itemDetails: {
        margin: 10
    },
    itemTitle: {
        width: 200,
        fontSize: 18,
        fontWeight: 'bold'
    },
    itemDescription: {
        marginTop: 5,
        width: 200,
        fontSize: 13,
        fontWeight: '500',
        minHeight: 70,
    },
    timer: {
        marginTop: 5,
        fontSize: 12,
        fontWeight: '100'
    },
    priceContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    priceAmount: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    baseprice: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    bidPrice: {
        fontSize: 22,
        fontWeight: 'bold',
        color: Colors.black
    },
    palceHolder: {
        fontSize: 12,
        fontWeight: 'bold',
        color: Colors.grey
    },
    buttonAndTimer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    timerContainer: {
        marginBottom: 15,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    timer: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    normalButton: {
        marginRight: 10,
        width: 200,
        height: 30,
        borderRadius: 8,
        backgroundColor: Colors.green,
    },
    disabledButton: {
        marginRight: 10,
        width: 200,
        height: 30,
        borderRadius: 8,
        backgroundColor: Colors.silver,
    },
    overButton: {
        marginRight: 10,
        width: 200,
        height: 30,
        borderRadius: 8,
        backgroundColor: Colors.grey,
    },

});

export default FlatlistView