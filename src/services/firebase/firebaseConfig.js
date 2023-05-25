import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAqqEQmOwbmJyFa8wfS0wJUfl99JZBCCVw",
  authDomain: "coder-stor3d.firebaseapp.com",
  projectId: "coder-stor3d",
  storageBucket: "coder-stor3d.appspot.com",
  messagingSenderId: "984672306644",
  appId: "1:984672306644:web:1724990b666ae696ca4241"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)