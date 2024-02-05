import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCpKMrulmZ255eH5M-MugjANdvfrvUbPdY",
  authDomain: "agroforestdao.firebaseapp.com",
  projectId: "agroforestdao",
  storageBucket: "agroforestdao.appspot.com",
  messagingSenderId: "684267950517",
  appId: "1:684267950517:web:d10082199a2c552c4909fc"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);