// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_f6hzmdZEX-XKGGzkR3UwA5FT3MCHWRk",
  authDomain: "pacorriente-c0951.firebaseapp.com",
  projectId: "pacorriente-c0951",
  storageBucket: "pacorriente-c0951.firebasestorage.app",
  messagingSenderId: "553660681408",
  appId: "1:553660681408:web:606882b224915608287125"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});


export const db = getFirestore(app);