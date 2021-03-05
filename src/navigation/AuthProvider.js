import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import registerUser from "../services/Registration";
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
                        await auth().signInWithEmailAndPassword(email, password);
                    } catch (e) {
                        console.log(e);
                        alert(e)
                    }
                },
                register: async (email, password) => {
                    try {
                        await auth().createUserWithEmailAndPassword(email, password).then((response) => {
                            
                            const uid = response.user.uid;

                            const data = {
                                id: uid,
                                email,
                            };

                            // registerUser(uid, data);
                            firestore().collection('users').doc(uid).set(data);
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