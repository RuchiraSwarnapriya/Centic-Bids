import firestore from '@react-native-firebase/firestore';

// add new user details to firebase database
export const registerUser = ({uid, data}) => {
    const reg = firestore().collection('users').doc(uid).set(data);
    return reg;
};