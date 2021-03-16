import { StyleSheet } from 'react-native';
import { Colors } from "../../assets/colors";

const styles = StyleSheet.create({

    slider: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeDotStyle: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: Colors.magenda
    },
    dotStyle: {
        width: 5,
        height: 5,
        borderRadius: 2.5,
        backgroundColor: Colors.darkGrey
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
        borderRadius: 5
    },
    
});

export default styles