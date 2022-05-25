import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-Ukvo_5Jts1sFU4hoLish8_2XajmQ4Fc",
  authDomain: "project-d7a6f.firebaseapp.com",
  projectId: "project-d7a6f",
  storageBucket: "project-d7a6f.appspot.com",
  messagingSenderId: "36775860154",
  appId: "1:36775860154:web:2dc80436687aa382492f83",
  measurementId: "G-FW8L9Q006C"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);


const auth = getAuth();
// const createUser = createUserWithEmailAndPassword();
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

export { db, auth };