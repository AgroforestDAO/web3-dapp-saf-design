// firebaseService.js
import { doc, setDoc, getDoc, updateDoc, addDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // Importando db de firebase.js
import { getAuth, onAuthStateChanged } from "firebase/auth";


//export const usersRef = db.collection("users");
//export const safsRef = db.collection("safs");
//export const mentorsRef = db.collection("mentors");

export async function getCurrentUser() {
  const auth = getAuth();
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      async (user) => {
        unsubscribe();
        if (user) {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            resolve(docSnap.data());
          } else {
            reject("No such user!");
          }
        } else {
          reject("No user is signed in.");
        }
      },
      (error) => {
        unsubscribe();
        reject(error);
      }
    );
  });
}

export async function getSaf(uid) {
  const safsRef = collection(db, 'safs');
  const q = query(safsRef, where('uid', '==', uid));
  const querySnapshot = await getDocs(q);
  let data = null;
  querySnapshot.forEach((doc) => {
    data = doc.data();
  });
  return data;
}

export async function addUser(user) {
  const userRef = doc(db, 'users', user.uid);
  const docSnap = await getDoc(userRef);
  const currentTime = new Date();

  if (!docSnap.exists()) {
    await setDoc(userRef, {
      displayName: user.displayName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      uid: user.uid,
      photoURL: user.photoURL,
      createdAt: currentTime,
      lastLogin: currentTime
    })
    .then(() => {
      console.log('Dados do usuário salvos com sucesso!');
    })
    .catch((error) => {
      console.error('Erro ao salvar os dados do usuário: ', error);
    });
  } else {
    await updateDoc(userRef, {
      lastLogin: currentTime
    })
    .then(() => {
      console.log('Data e hora do último login atualizadas com sucesso!');
    })
    .catch((error) => {
      console.error('Erro ao atualizar a data e hora do último login: ', error);
    });
  }
}

export async function addSaf(payload) {  
  const currentTime = new Date();
  let data = {    
    safName: payload.safName,
    createdByUID: payload.uid,    
    createdByName: payload.userName,
    createdByEmail: payload.email,
    mentorName: payload.mentor,
    guardianName: payload.guardian,
    local: payload.local,
    safType: "Lavouras Agroflorestais",
    species: payload.species,
    createdAt: currentTime,
    updatedAt: currentTime,
  }

  await addDoc(collection(db, "safs"), data)
    .then((docRef) => {
        console.log("Documento escrito com ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Erro ao adicionar o documento: ", error);
  });
  
};

export async function getMentors() {
  const mentorsRef = collection(db, "mentors");
  let mentors = [];
 
  try {
     const querySnapshot = await getDocs(mentorsRef);
     querySnapshot.forEach((doc) => {
       mentors.push({ id: doc.id, ...doc.data() });
     });
  } catch (error) {
     console.error("Erro ao buscar mentores: ", error);
  }
 
  return mentors;
 }
 

export async function addMentor(payload){
  const currentTime = new Date();
  let data = {
    name: payload.name,
    email: payload.email,
    createdByUID: payload.uid,
    createdByName: payload.displayName,
    createdByEmail: payload.email,
    createdAt: currentTime,
    updatedAt: currentTime
  }
  await addDoc(collection(db, "mentors"), data)
  .then((docRef) => {
    console.log("Mentor registrado com sucesso no ID: ", docRef.id);
  })
  .catch((error) => {
    console.error("Erro ao adicionar mentor", error)
  })
}
