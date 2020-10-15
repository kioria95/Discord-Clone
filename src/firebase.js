import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAFk4sYsg7juhxqD-pQVVGfCrwJH0wLyG8",
  authDomain: "discord-clone-8d303.firebaseapp.com",
  databaseURL: "https://discord-clone-8d303.firebaseio.com",
  projectId: "discord-clone-8d303",
  storageBucket: "discord-clone-8d303.appspot.com",
  messagingSenderId: "758462443773",
  appId: "1:758462443773:web:6129ee56ff12ca46a64e94",
  measurementId: "G-4KE69SHPRS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore()
const provider = new firebase.auth.GoogleAuthProvider()

export default db;
export {auth,provider};