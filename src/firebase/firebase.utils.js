import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA0Z7233SHlkwUphGw7CVquL2hmZ7WsNuo",
  authDomain: "lol-skins-db1.firebaseapp.com",
  databaseURL: "https://lol-skins-db1.firebaseio.com",
  projectId: "lol-skins-db1",
  storageBucket: "lol-skins-db1.appspot.com",
  messagingSenderId: "970510922135",
  appId: "1:970510922135:web:d5342a74e138f66d63d4d2",
  measurementId: "G-NGS7MEJXK6"
};

export const createUserProfileDoc = async (userAuth, additionalData) => {
  // when we log out the return for the userAuth is 'null' so we just want to return and stop the function
  if (!userAuth) return;

  // with the return of the userAuth we try to get the generated firebase id
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // here we create the data with the logged in user information, checking if the user/uid exists or not so we don't create a already existing user
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log("error creating user", err);
    }
  }


  //and then return the userRef to be used by the app
  return userRef;
};


export const addCollectionAndDocuments = async ( collectionKey, objectsToAdd ) => {
  const collectionRef = firestore.collection(collectionKey)
  console.log(collectionRef);

  //esse método batch garante que se alguma parte da chamada para o db falhar em settar algo, falhar tudo e ter uma previsibilidade melhor
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    // gerar um uid aleatorio para cada doc da coleção
    const newDocRef = collectionRef.doc();
    console.log(newDocRef)
    batch.set( newDocRef, obj );
  }); 

  return await batch.commit()

}

export const convertColletionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const {title, items} = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })
  
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection
    return accumulator;
  }, {})

} 

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
