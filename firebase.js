
import { initializeApp, getApps } from 'firebase/app'
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth'
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  getDoc,
  getDocs,
  doc,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
  collectionGroup,
  arrayUnion,
  arrayRemove,
  updateDoc,
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAgnVRChlzK1E6OukSpxYQoC2LVwHqphX4",
    authDomain: "rn-insta-clone-2b381.firebaseapp.com",
    projectId: "rn-insta-clone-2b381",
    storageBucket: "rn-insta-clone-2b381.appspot.com",
    messagingSenderId: "958384689542",
    appId: "1:958384689542:web:c5bcdc4190b3f5704edc07"
  };

if (!getApps().length) initializeApp(firebaseConfig)

export {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  collection,
  collectionGroup,
  addDoc,
  getFirestore,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
  getDoc,
  getDocs,
  setDoc,
  doc,
  arrayUnion,
  arrayRemove,
  updateDoc,
}
