import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { GUEST, USER } from '../../utils/constants'
import { useSelector } from 'react-redux'
import NoPreViewImage from '../../assets/images/no_preview.png'
import { BIDDING } from '../../routes/route_paths'
import Swiper from 'react-native-swiper'

const HomeScreen = ({ route, navigation }) => {

    const { role } = route.params;

    useEffect(() => {
        fetch('https://picsum.photos/v2/list?page=2&limit=5')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => alert('Please check your network'))
            .finally(() => setLoading(false));

    }, []);

    const [isLoading, setLoading] = useState(true);

    const [data, setData] = useState([]);

    const bidNow = (item) => navigation.navigate(BIDDING, {
        title: item.title,
        description: item.body,
        // baseprice: item.baseprice,
        // currentBid: item.currentBid,
        // timer:item.remaningTime
        basePrice: '100$',
        currentBid: 150,
        timer: '20 Min',

    });

    const showAlert = () => alert("For place a bid for this item you have to Log first !")

    const auctionItemDetails = useSelector(({ auctionItems }) => auctionItems.items);

    const Item = ({ item }) => (
        <View>
            <View style={styles.card}>
                <View style={styles.cardDetails}>
                    <View style={styles.carouselContainer}>
                        <Swiper autoplayTimeout={5}
                            style={styles.wrapper}
                            showsButtons={false}
                            loadMinimal={true}
                            showsPagination={false}
                            loop={true} autoplay={true}
                        >
                            {/* map image from database */}
                            {data.map((data, index) => {
                                return (
                                    <View key={index} style={styles.slide1}>
                                        <Image style={styles.itemImage}
                                            // source={{ uri:data.downlaod_url }}
                                            source={NoPreViewImage}
                                        />
                                    </View>
                                )
                            })}
                        </Swiper>
                    </View>
                    <View style={styles.itemDetails}>
                        <Text style={styles.itemTitle}>{item.title}</Text>
                        <Text style={styles.itemDescription}>{item.body}</Text>
                        <View style={styles.priceContainer}>
                            <View style={styles.priceAmount}>
                                <Text style={styles.baseprice}>100 $</Text>
                                <Text style={styles.palceHolder}>Base Price</Text>
                            </View>
                            <View style={styles.priceAmount}>
                                <Text style={styles.bidPrice}>150 $</Text>
                                <Text style={styles.palceHolder}>Current Bid</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.buttonAndTimer}>
                    <View style={styles.timerContainer}>
                        <Text style={styles.timer}>20:00</Text>
                        <Text style={styles.palceHolder}>Remaning Time</Text>
                    </View>
                    {role == USER &&
                        <TouchableOpacity style={styles.bidButton} onPress={() => bidNow(item)} >
                            <Text style={styles.bidButtonText}>BID NOW</Text>
                        </TouchableOpacity>
                    }
                    {role == GUEST &&
                        <TouchableOpacity style={[styles.bidButton, { backgroundColor: 'grey' }]} onPress={() => showAlert()} >
                            <Text style={styles.bidButtonText}>BID NOW</Text>
                        </TouchableOpacity>
                    }
                </View>
            </View>
        </View>
    );

    return (
        <View style={styles.main}>
            <Text style={styles.title}>Ongoing Bids</Text>
            <FlatList data={auctionItemDetails} renderItem={Item} keyExtractor={item => item.id} />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center'
    },
    card: {
        backgroundColor: 'white',
        width: 370,
        marginTop: 10,
        shadowColor: "#000",
        elevation: 2,
        borderRadius: 10,

    },
    cardDetails: {
        flexDirection: 'row'
    },
    carouselContainer: {
        position: 'relative',
        top: 10,
        width: 150,
        height: 150,
        paddingTop: 10,
    },
    slide1: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeDotStyle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#004E94'
    },
    dotStyle: {
        width: 7,
        height: 7,
        borderRadius: 3.5,
        backgroundColor: '#A5A5A7'
    },
    paginationStyle: {

    },
    itemImage: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
        width: 120,
        height: 150
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
        marginTop: 5,
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
        width: 150,
        justifyContent: 'center',
        alignItems: 'center'
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
        alignItems: 'center'
    },
    bidButtonText: {
        fontWeight: 'bold',
        color: 'white'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
        fontSize: 20,
        fontWeight: 'bold'
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    textInput: {
        backgroundColor: '#C0C0C0'
    }
});

export default HomeScreen
