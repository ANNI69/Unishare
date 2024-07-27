// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSj8hdDcnsNgx27jIKiC2NhWwxy21y9sk",
  authDomain: "unishare-e1fb2.firebaseapp.com",
  projectId: "unishare-e1fb2",
  storageBucket: "unishare-e1fb2.appspot.com",
  messagingSenderId: "764672998369",
  appId: "1:764672998369:web:dddea57e848b6bb77eb0a0",
  measurementId: "G-06NH2R2NDB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);