import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBTSMuTLcz082FZ6h7_HzDqc7uw0o_pkXw",
    authDomain: "custom-solutions-513a0.firebaseapp.com",
    databaseURL: "https://custom-solutions-513a0.firebaseio.com",
    projectId: "custom-solutions-513a0",
    storageBucket: "custom-solutions-513a0.appspot.com",
    messagingSenderId: "876413603748",
    appId: "1:876413603748:web:15e674a64b837d0c35bb31",
    measurementId: "G-E7B6T45MYF"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();