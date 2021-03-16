import { StyleSheet } from 'react-native';
import { Colors } from "../../assets/colors";

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


export default styles