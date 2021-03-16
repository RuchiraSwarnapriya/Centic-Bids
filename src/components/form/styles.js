import { StyleSheet } from 'react-native';
import { Colors } from "../../assets/colors";

const styles = StyleSheet.create({
    
    main: {
        flex: 1,
        backgroundColor: Colors.white
    },
    container: {
        height: 400,
        justifyContent: 'flex-end',
        bottom:50,
        marginHorizontal: 16,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    appLogo: {
        width: 250,
        height: 250,
        alignSelf: 'center',
        marginTop: 50
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: Colors.white,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    textInput: {
        backgroundColor: Colors.ghostWhite,
        borderColor: Colors.grey,
        borderWidth: 0.2,
        borderRadius: 5,
        textAlign: 'center'
    },
    button: {
        marginTop: 20,
        backgroundColor: Colors.darkMegenda
    },
    info: {
        marginTop: 10,
        textAlign: 'center',
        fontSize: 13,
        fontWeight: 'bold',
        color: Colors.grey,
        textDecorationLine: 'underline'
    }

});

export default styles