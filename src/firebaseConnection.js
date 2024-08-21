import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAjQBDKQz7hMhmDbEYdIBjY5wB57wyvAHg",
    authDomain: "bancodedadoss-490c9.firebaseapp.com",
    projectId: "bancodedadoss-490c9",
    storageBucket: "bancodedadoss-490c9.appspot.com",
    messagingSenderId: "909332309061",
    appId: "1:909332309061:web:f325e32b645f215def6f2c"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth};