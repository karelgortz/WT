import { initializeApp } from "firebase/app";
import { getFirestore, initializeFirestore, } from 'firebase/firestore/lite';
import {getMessaging, onMessage} from "firebase/messaging";
import firebase from "firebase/compat";

//firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyD0vW2tYEHsgmJAzm11E_z6dOV2eHeQOT8",
  authDomain: "fitnessapp-d99a2.firebaseapp.com",
  projectId: "fitnessapp-d99a2",
  storageBucket: "fitnessapp-d99a2.appspot.com",
  messagingSenderId: "430957386348",
  appId: "1:430957386348:web:35b4b936e67be9b49bd649",
  vapidKey: "BHmt8OnWzfBRggFam36BrSOVrJL-yWrhOzv0d-tFcgiY8xkF2xZsqo0dPe0lQUhHRb_f0btWLTXpFK7kX4hXMmw"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const options = {
  ignoreUndefinedProperties: true
};
initializeFirestore(app, options);

const db = getFirestore(app);
export default db;
