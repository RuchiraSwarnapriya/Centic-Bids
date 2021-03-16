import { StyleSheet } from 'react-native';
import { Colors } from "../../assets/colors";

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

export default styles