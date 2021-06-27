import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCDPiN29DXDxJrni1FeQDDYFwR8PwbSE98",
  authDomain: "linkedin-clone-35816.firebaseapp.com",
  projectId: "linkedin-clone-35816",
  storageBucket: "linkedin-clone-35816.appspot.com",
  messagingSenderId: "545241224463",
  appId: "1:545241224463:web:ef3c7f8554873c17129a7a",
  measurementId: "G-0KNMSGZL2P"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage};
  export default db;