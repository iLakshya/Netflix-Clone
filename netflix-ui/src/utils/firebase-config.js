import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD6z8V1sPpp6kTrj2qnfMhmBTunvggtuNA",
  authDomain: "react-netflix-clone-a5183.firebaseapp.com",
  projectId: "react-netflix-clone-a5183",
  storageBucket: "react-netflix-clone-a5183.appspot.com",
  messagingSenderId: "585879537116",
  appId: "1:585879537116:web:f6379ed026093496193b19",
  measurementId: "G-HX4KMQRVK9"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);