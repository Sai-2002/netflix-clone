import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyACdGwA7t1tTE9tW0md42g0IXWDlPmNPl0",
  authDomain: "netflix-clone-292dc.firebaseapp.com",
  projectId: "netflix-clone-292dc",
  storageBucket: "netflix-clone-292dc.appspot.com",
  messagingSenderId: "556361572204",
  appId: "1:556361572204:web:015d3ad97dcefe08835d49"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;