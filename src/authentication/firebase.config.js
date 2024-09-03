// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA6w57iXTvdIamR9kv69sEmNm2whgxM3eI",
    authDomain: "batigor-shop.firebaseapp.com",
    projectId: "batigor-shop",
    storageBucket: "batigor-shop.appspot.com",
    messagingSenderId: "874758830725",
    appId: "1:874758830725:web:52d7467a9657151d7907ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;