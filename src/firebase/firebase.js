// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyDGQvukIG0HpjYNMNsIeEc8xOIaUV7c87w',
    authDomain: 'heychat-fdfa7.firebaseapp.com',
    databaseURL: 'https://heychat-fdfa7-default-rtdb.firebaseio.com',
    projectId: 'heychat-fdfa7',
    storageBucket: 'heychat-fdfa7.appspot.com',
    messagingSenderId: '648053696813',
    appId: '1:648053696813:web:dbe7ed37c2539354738ba4',
    measurementId: 'G-CDG0KJQWQQ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

export const provider = new GoogleAuthProvider();
export const auth = getAuth();
auth.languageCode = 'it';
