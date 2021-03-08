import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { BIDDING } from '../../navigation/routes/route_paths';
import CountDown from 'react-native-countdown-component';
import Swiper from 'react-native-swiper';

const FlatlistView = ({ navigation, data, type, }) => {

    const bidNow = (item) => navigation.navigate(BIDDING, {
        title: item.title,
        description: item.description,
        basePrice: item.basePrice,
        currentBid: item.currentBid,
        expTime: item.expTime.seconds,
    });

    const alertDisplay = () => {
        alert('For Place a BID, You have to Log !');
    }

    const Card = ({ item }) => {

        const expTime = item.expTime.seconds

        const currentTime = new Date().getTime() / 1000;

        const remaningTime = expTime - currentTime

        return (
            <View style={styles.card}>
                <View style={styles.cardDetails}>
                    <View style={styles.carouselContainer}>
                        <Swiper autoplayTimeout={3}
                            style={styles.wrapper}
                            showsButtons={false}
                            loadMinimal={true}
                            showsPagination={true}
                            paginationStyle={styles.paginationStyle}
                            activeDotStyle={styles.activeDotStyle}
                            dotStyle={styles.dotStyle}
                            loop={true} autoplay={true}
                        >
                            {/* map image from database */}
                            {item.images.map((data, index) => {
                                return (
                                    <View key={index} style={styles.slide1}>
                                        <Image style={styles.itemImage}
                                            source={{ uri: data }}
                                        />
                                    </View>
                                )
                            })}
                        </Swiper>
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
                        <CountDown
                            until={remaningTime}
                            onFinish={() => alert('finished')}
                            onPress={() => alert('hello')}
                            size={12}
                        />
                        <Text style={styles.palceHolder}>Remaning Time</Text>
                    </View>
                    {type == "User" &&
                        <TouchableOpacity style={styles.bidButton} onPress={() => bidNow(item)} >
                            <Text style={styles.bidButtonText}>BID NOW</Text>
                        </TouchableOpacity>
                    }{type == "Guest" &&
                        <TouchableOpacity style={[styles.bidButton, { backgroundColor: 'grey' }]} onPress={() => alertDisplay()} >
                            <Text style={styles.bidButtonText}>BID NOW</Text>
                        </TouchableOpacity>
                    }

                </View>
            </View>
        )
    };

    return (
        <FlatList data={data} renderItem={Card} keyExtractor={item => item.id} />
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        width: 370,
        marginTop: 10,
        shadowColor: "#000",
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
    slide1: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeDotStyle: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#004E94'
    },
    dotStyle: {
        width: 5,
        height: 5,
        borderRadius: 2.5,
        backgroundColor: '#A5A5A7'
    },
    paginationStyle: {
        bottom: -8
    },
    itemImage: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
        width: 120,
        height: 120,
        borderRadius:5
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
        fontWeight: '500'
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
    },
    palceHolder: {
        fontSize: 12,
        fontWeight: 'normal',
    },
    buttonAndTimer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    timerContainer: {
        marginTop: 30,
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
    bidButton: {
        width: 200,
        height: 30,
        backgroundColor: 'green',
        alignSelf: 'flex-end',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    bidButtonText: {
        fontWeight: 'bold',
        color: 'white'
    },
});

export default FlatlistView