
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCwL3cHrtXKPoI4SEOB12OaLv3ShFyPLwk",
  authDomain: "fir-course-3c656.firebaseapp.com",
  projectId: "fir-course-3c656",
  storageBucket: "fir-course-3c656.appspot.com",
  messagingSenderId: "950842358254",
  appId: "1:950842358254:web:217302e2b2fbd61879f6ff"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const googleProvider=new GoogleAuthProvider();
export const db=getFirestore(app);