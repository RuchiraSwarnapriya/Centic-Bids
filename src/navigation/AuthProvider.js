import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { registerUser, updateFcmToken } from "../services/user";
import messaging from '@react-native-firebase/messaging';
import { TOO_MANY_REQUEST, WRONG_PASSWORD, USER_NOT_FOUND, EMAIL_ALREADY_USED, WEAK_PASSWORD } from "../utils/error-constants";


export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) => {
                    try {
                        await auth().signInWithEmailAndPassword(email, password).then((response) => {

                            // auth user id 
                            const uid = response.user.uid;

                            // to get fcm toke check user persmission
                            messaging().requestPermission();

                            //get fcm token and send it to firestore database and update fcm token when user sign in diffrent deivices
                            messaging().getToken().then(token => {
                                updateFcmToken(uid, token);
                            });

                        }).catch(error => {
                            switch (error.code) {
                                case 'auth/too-many-requests':
                                    alert(TOO_MANY_REQUEST);
                                    break;
                                case 'auth/wrong-password':
                                    alert(WRONG_PASSWORD);
                                    break;
                                case 'auth/user-not-found':
                                    alert(USER_NOT_FOUND);
                                    break;
                            }
                        });
                    } catch (e) {
                        console.log(e);
                    }
                },
                register: async (email, password) => {
                    try {
                        await auth().createUserWithEmailAndPassword(email, password).then((response) => {

                            // auth user id 
                            const uid = response.user.uid;

                            // to get fcm toke check user persmission
                            messaging().requestPermission();

                            //get fcm token and send it to firestore database
                            messaging().getToken().then(token => {
                                registerUser(uid, email, token);
                            });

                        }).catch(error => {
                            switch (error.code) {
                                case 'auth/email-already-in-use':
                                    alert(EMAIL_ALREADY_USED);
                                    break;
                                case 'auth/weak-password':
                                    alert(WEAK_PASSWORD);
                                    break;
                            }
                        });
                    } catch (e) {
                        console.log(e);
                    }
                },
                logout: async () => {
                    try {
                        await auth().signOut();
                    } catch (e) {
                        console.error(e);
                    }
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};