// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvQNdXllL0x9PS5PEZkfGPdRNKlJXTDjo",
  authDomain: "kiikii-53969.firebaseapp.com",
  projectId: "kiikii-53969",
  storageBucket: "kiikii-53969.appspot.com",
  messagingSenderId: "749457355253",
  appId: "1:749457355253:web:74fd1dbcc0259f4189f0bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


export const firestoreFetch= async() => {
    const querySnapshot = await getDocs(collection(db, "productos"));
    const dataFromFirestore = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
    return dataFromFirestore
  }