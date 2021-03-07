import firestore from '@react-native-firebase/firestore';

// add new user details to firebase database
export const registerUser = (uid, email, token) => {

    const data = {
        id: uid,
        email: email,
        fcmToken: token
    };

    return firestore().collection('users').doc(uid).set(data);
};

//get current app user details for firestore
export const fetchUserDeatils = (uid) => {
    return firestore().collection('users').doc(uid).get();
};

//update fcm token when user login diffrent device
export const updateFcmToken = (uid, token) => {

};