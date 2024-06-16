import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDAnjrKrEGLqHDk5_n2qAqL0clvaaJKIj4",
  authDomain: "schoolofai-3eb52.firebaseapp.com",
  projectId: "schoolofai-3eb52",
  storageBucket: "schoolofai-3eb52.appspot.com",
  messagingSenderId: "256271135334",
  appId: "1:256271135334:web:41927d845c94982b5233a7",
  databaseURL: "https://schoolofai-3eb52-default-rtdb.asia-southeast1.firebasedatabase.app" // Update this line
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set, onValue };