import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'

const config =  {
  apiKey: "AIzaSyA0Z7233SHlkwUphGw7CVquL2hmZ7WsNuo",
  authDomain: "lol-skins-db1.firebaseapp.com",
  databaseURL: "https://lol-skins-db1.firebaseio.com",
  projectId: "lol-skins-db1",
  storageBucket: "lol-skins-db1.appspot.com",
  messagingSenderId: "970510922135",
  appId: "1:970510922135:web:d5342a74e138f66d63d4d2",
  measurementId: "G-NGS7MEJXK6"
};

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;