import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore, collection, // getDocs
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDd8qzYsbXQ11XEZR47PGXlvLsTpvxQg18",
  authDomain: "e-commerce-web-app-c08cc.firebaseapp.com",
  projectId: "e-commerce-web-app-c08cc",
  storageBucket: "e-commerce-web-app-c08cc.appspot.com",
  messagingSenderId: "368428627704",
  appId: "1:368428627704:web:7c8cd8e802beffedac6d0d"
};
  

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore();

  export {auth, db };

