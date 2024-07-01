import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDEVc2NOJvu2qs1KEuHY5OHP6lDZh8Jv0Q",
    authDomain: "crwn-clothing-408d9.firebaseapp.com",
    projectId: "crwn-clothing-408d9",
    storageBucket: "crwn-clothing-408d9.appspot.com",
    messagingSenderId: "796020298799",
    appId: "1:796020298799:web:48588a55677611d42362da"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig)

  const provider = new GoogleAuthProvider()

  provider.setCustomParameters({
    prompt: "select_account"
  })

  export const auth = getAuth()
  export const signInWithGooglePopup = ()=> signInWithPopup(auth, provider)

  export const db = getFirestore()

  export const createUserDocumentFromAuth = async (userAuth) =>{
    const userDocRef = doc(db, 'users', userAuth.uid)

    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot)
    console.log(userSnapshot.exists())

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth
        const createdAt = new Date()

        try{
            await setDoc(userDocRef, {displayName, email, createdAt})
        } catch(error){
            console.log('error creating the user', error.message)
        }
    }
    return userDocRef
  }