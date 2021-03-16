import { StyleSheet } from 'react-native';
import { Colors } from "../../assets/colors";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 16,
        paddingBottom: 50,
        backgroundColor: Colors.white
    },
    separator: {
        alignSelf: 'center',
        width: 250,
        marginVertical: 10,
        borderBottomColor: Colors.darkGrey,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    logo: {
        justifyContent: 'flex-start',
        alignSelf: 'center',
        width: 300,
        height: 300,
        bottom: 100
    },
    loginButton: {
        backgroundColor: Colors.darkMegenda
    },
    guestButton: {
        backgroundColor: Colors.green
    }
    
});

export default styles