import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDV4qE95g8CycnNEAXq3sYtQ8AtrgMB9Sw",
  authDomain: "shreekhodiyar-44b52.firebaseapp.com",
  projectId: "shreekhodiyar-44b52",
  storageBucket: "shreekhodiyar-44b52.firebasestorage.app",
  messagingSenderId: "385529963911",
  appId: "1:385529963911:web:e26133c2eb2636f48d1f22",
  measurementId: "G-N4KB81QHYN"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
