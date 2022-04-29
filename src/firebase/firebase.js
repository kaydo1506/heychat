// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { firebaseConfig } from '../firebaseConfig';


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

export const provider = new GoogleAuthProvider();
export const auth = getAuth();
auth.languageCode = 'it';
