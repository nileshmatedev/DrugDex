import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore'

const firebaseApp = initializeApp({
    apiKey: "AIzaSyDZjJ4fvx0G2MOgLgKWEYGfTxCXCQIbpe4",
    authDomain: "drugdex-5dd99.firebaseapp.com",
    projectId: "drugdex-5dd99",
    storageBucket: "drugdex-5dd99.appspot.com",
    messagingSenderId: "132477994595",
    appId: "1:132477994595:web:a658ad969f46a3d3d5da56",
    measurementId: "G-7N7DW0GXRL"
  });    
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
