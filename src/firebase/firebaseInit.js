import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBtkLY4ojXMDmnfbcqQLLNsbgquHmhjXoU",
  authDomain: "invoice-app-binus.firebaseapp.com",
  projectId: "invoice-app-binus",
  storageBucket: "invoice-app-binus.appspot.com",
  messagingSenderId: "1019782123562",
  appId: "1:1019782123562:web:4f49ee62e6f4db97cf3353"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp)

export default firebaseApp.firestore();
export {auth}