import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Alert } from 'react-native'
import Header from "../../components/header/Header"
import { fetchItems } from '../../redux/actions/auctionItem'
import { HOME } from '../../navigation/routes/route_paths'
import { useDispatch } from 'react-redux'


const BiddingScreen = ({ route, navigation }) => {

    const dispatch = useDispatch();

    const { title, description, basePrice, currentBid, timer } = route.params;

    const [CurrentBid, setCurrentBid] = useState(currentBid)

    const [MyBid, setMyBid] = useState('');

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

    }

    const confirmBid = () => {
        Alert.alert("Confirmation", "Are you sure to place this order ?", [
            {
                text: "No",
                onPress: () => null,
                style: "cancel"
            },
            { text: "YES", onPress: () => placeBid() }
        ]);
    }

    const placeBid = () => {
        setCurrentBid(MyBid);
        dispatch(fetchItems());
        navigation.navigate(HOME);
    }

    return (
        <SafeAreaView style={styles.main}>
            <Header title="BID Here" navigation={navigation} />
            <View style={styles.container}>
                <Text style={styles.currentBid}>{CurrentBid}$</Text>
                <Text style={styles.placeHolder}>Current Bid</Text>
                <View style={styles.detailContainer}>
                    <View>
                        <Text style={styles.timer}>{timer}</Text>
                        <Text style={[styles.placeHolder, { fontSize: 12 }]}>Remaining Time</Text>
                    </View>
                    <View>
                        <Text style={styles.timer}>{basePrice}</Text>
                        <Text style={[styles.placeHolder, { fontSize: 12 }]}>Base Price</Text>
                    </View>
                </View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
                <TextInput style={styles.textInput} placeholder="Place your bid here" keyboardType='numeric' onChangeText={value => setMyBid(value)} />
                <TouchableOpacity style={styles.bidButton} onPress={() => verifyBid()}>
                    <Text style={styles.bidButtonText}>PLACE BID</Text>
                </TouchableOpacity>
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
    detailContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    timer: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
    },
    title: {
        marginTop: 15,
        textAlign: 'center',
        fontSize: 18,
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
