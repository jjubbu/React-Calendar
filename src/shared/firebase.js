import firebase from 'firebase/app';
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD8gaAZ_27B6-kGQ67D3gPt_NWMD06HMWs",
  authDomain: "seona-react-calendar.firebaseapp.com",
  projectId: "seona-react-calendar",
  storageBucket: "seona-react-calendar.appspot.com",
  messagingSenderId: "871318287656",
  appId: "1:871318287656:web:c3c850884bcdf7a9194c1d",
  measurementId: "G-KS80K548PJ"
  };

  firebase.initializeApp(firebaseConfig);
const apiKey = firebaseConfig.apiKey;
const firestore = firebase.firestore();

export {apiKey, firestore};
