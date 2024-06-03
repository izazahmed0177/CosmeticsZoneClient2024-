


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAclhZ1sFMB2vK6wh3x1Zs9Snd-eylem0A",
  authDomain: "cosmeticszone2024.firebaseapp.com",
  projectId: "cosmeticszone2024",
  storageBucket: "cosmeticszone2024.appspot.com",
  messagingSenderId: "537296278255",
  appId: "1:537296278255:web:bbb35c113a035fcceec11a"
};



const app = initializeApp(firebaseConfig);

const auth=getAuth(app)

export default auth;