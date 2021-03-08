import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { registerUser, updateFcmToken } from "../services/user";
import messaging from '@react-native-firebase/messaging';


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

                            //get fcm token and send it to firestore database
                            messaging().getToken().then(token => {
                                updateFcmToken(uid, token);
                            });

                        }). catch(error => {
                            alert(error.message);
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

                        }). catch(error => {
                            alert(error.message);
                        });
                    } catch (e) {
                        console.log(e);
                        alert(e)
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