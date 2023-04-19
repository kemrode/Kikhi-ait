import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyAk8I87gAulB10nQrvaaqZRt5fySbTAut4",
    authDomain: "quizzrn.firebaseapp.com",
    projectId: "quizzrn",
    storageBucket: "quizzrn.appspot.com",
    messagingSenderId: "450358219037",
    appId: "1:450358219037:web:07c1fd4d751510a92611f4",
    measurementId: "G-KK8WGCKLDS",
    databaseURL: "https://quizzrn-default-rtdb.europe-west1.firebasedatabase.app"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
const db = getDatabase(app);
export { db };