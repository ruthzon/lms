import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { createBrowserHistory } from 'history';
import { useContext } from "react";
import { UserContext } from "./userProvider";

const browserHistory = createBrowserHistory();

var firebaseConfig = {
    apiKey: 'AIzaSyB9giidNYNmRxYgj3PC4cysla54gHxaNJ4',
    authDomain: 'lms-leader.firebaseapp.com',
    databaseURL: 'https://lms-leader.firebaseio.com',
    projectId: 'lms-leader',
    storageBucket: 'lms-leader.appspot.com',
    messagingSenderId: '451375116419',
    appId: '1:451375116419:web:a631ec62e2e0a0304e6bb6',
    measurementId: 'G-2DZBMG06NZ',
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
    auth.signInWithPopup(provider).then((res) => {
        console.log(res.user);
        console.log(res.user.displayName);
        nav(res.user.displayName);
    });
    // nav();
};


export const generateUserDocument = async (user, additionalData) => {
    if (!user) return;
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
        const { email, displayName, photoURL, uid } = user;
        try {
            await userRef.set({
                displayName,
                email,
                photoURL,
                uid,
                ...additionalData
            });
        } catch (error) {
            console.error("Error creating user document", error);
        }
    }
    return getUserDocument(user.uid);
};
const getUserDocument = async uid => {
    if (!uid) return null;
    try {
        const userDocument = await firestore.doc(`users/${uid}`).get();
        return {
            uid,
            ...userDocument.data()
        };
    } catch (error) {
        console.error("Error fetching user", error);
    }
};
export const nav = (displayName) => {
    // const name= displayName.replace(/\s/g, '');
    browserHistory.replace('/' +  displayName+'/addcourse');
    window.location.reload();
};