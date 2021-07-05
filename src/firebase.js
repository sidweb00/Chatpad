import firebase from "firebase/app";
import "firebase/auth";
// for authentication
export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBQ-bYmOqCoCA_fydEywdl9yiJKU9w6gKE",
    authDomain: "messenger-5aade.firebaseapp.com",
    projectId: "messenger-5aade",
    storageBucket: "messenger-5aade.appspot.com",
    messagingSenderId: "994424683460",
    appId: "1:994424683460:web:a6f2564fac5d4b76b94291"
}).auth();