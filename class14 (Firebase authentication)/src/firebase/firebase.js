
import { initializeApp } from "firebase/app";
// initializa service
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    doc,
    deleteDoc,
    updateDoc,
    setDoc,
    getDoc 

} from "firebase/firestore"
import { 
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword 
 } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHDb2jOMwPas9992o_hLaZ9sn_cx65EmU",
  authDomain: "react-crud-app-e2b3b.firebaseapp.com",
  projectId: "react-crud-app-e2b3b",
  storageBucket: "react-crud-app-e2b3b.appspot.com",
  messagingSenderId: "749025808233",
  appId: "1:749025808233:web:ee3238be5d97ced1f0b7f8"
};

 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize db
const db = getFirestore(app)

// db collection
const db_collection = collection(db,"todoList")

// collectionName
const todoListCollection = "todoList";

// authenticatiuon
const auth = getAuth()
export {
    db_collection,
    db,
    addDoc,
    getDocs,
    doc,
    deleteDoc,
    todoListCollection,
    updateDoc,
    auth,
    createUserWithEmailAndPassword,
    setDoc,
    signInWithEmailAndPassword ,
    getDoc 

}

