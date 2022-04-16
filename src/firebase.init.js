// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYpsbzzirOkVX8cH-gFS_Yt2mQXB-EJt4",
  authDomain: "tooth-care-f261d.firebaseapp.com",
  projectId: "tooth-care-f261d",
  storageBucket: "tooth-care-f261d.appspot.com",
  messagingSenderId: "969350395188",
  appId: "1:969350395188:web:60e70510b12484ebc0e161",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
