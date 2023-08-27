
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'

const firebaseConfig = {

  apiKey: "AIzaSyAD-RzUvbUYflmXsrn7d7IGs-MRexpjdCE",
  authDomain: "smartweathersystem-8041c.firebaseapp.com",
  databaseURL: "https://smartweathersystem-8041c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "smartweathersystem-8041c",
  storageBucket: "smartweathersystem-8041c.appspot.com",
  messagingSenderId: "203021795339",
  appId: "1:203021795339:web:9b44367d6474452800c70e"

};


const firebase = initializeApp(firebaseConfig);
const DataBase = getDatabase(firebase)

export {firebase,DataBase};
