
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB1ZHaJ-JkjX6Ef2IxJZREhcECnQAhPybM",
    authDomain: "eddy-platform.firebaseapp.com",
    projectId: "eddy-platform",
    storageBucket: "eddy-platform.firebasestorage.app",
    messagingSenderId: "1026487569593",
    appId: "1:1026487569593:web:fc35fa46adfadd92b31f68",
    measurementId: "G-NZBL0BV1T5"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
