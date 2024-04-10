// firebaseService.js
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  addDoc,
  deleteDoc,
  collection,
  query,
  where,
  getDocs
} from "firebase/firestore";
import { db } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

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

export async function addUser(user) {
  const userRef = doc(db, "users", user.uid);
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
      lastLogin: currentTime,
    })
      .then(() => {
        console.log("Dados do usuário salvos com sucesso!");
      })
      .catch((error) => {
        console.error("Erro ao salvar os dados do usuário: ", error);
      });
  } else {
    await updateDoc(userRef, {
      lastLogin: currentTime,
    })
      .then(() => {
        console.log("Data e hora do último login atualizadas com sucesso!");
      })
      .catch((error) => {
        console.error(
          "Erro ao atualizar a data e hora do último login: ",
          error
        );
      });
  }
}

export async function getAllSafs() {
  const safsRef = collection(db, "safs");
  let safs = [];

  try {
    const querySnapshot = await getDocs(safsRef);
    querySnapshot.forEach((doc) => {
      safs.push({ id: doc.id, ...doc.data() });
    });
  } catch (error) {
    console.error("Erro ao buscar todos os SAFs: ", error);
  }

  return safs;
}

export async function getSaf(uid) {
  const safsRef = collection(db, "safs");
  const q = query(safsRef, where("uid", "==", uid));
  const querySnapshot = await getDocs(q);
  let data = null;
  querySnapshot.forEach((doc) => {
    data = doc.data();
  });
  return data;
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
    guardianEmail: payload.guardianEmail,
    guardianTelegram: payload.guardianTelegram,
    local: payload.local,
    safType: "Lavouras Agroflorestais",
    species: payload.species,
    createdAt: currentTime,
    updatedAt: currentTime,
  };

  await addDoc(collection(db, "safs"), data)
    .then((docRef) => {
      console.log("Documento escrito com ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Erro ao adicionar o documento: ", error);
    });
}

export async function deleteSaf(id) {
  const safRef = collection(db, "safs");
  const safDoc = doc(safRef, id);

  try {
    await deleteDoc(safDoc);
    console.log("SAF excluído com sucesso!");
  } catch (error) {
    console.error("Erro ao excluir SAF: ", error);
  }
}

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



export async function addSeeds(payload) {
  const _user = await getCurrentUser();
  const currentTime = new Date();
  let data = {
    name: payload.name,
    stratum: payload.stratum,
    succession: payload.succession,
    ownerWallet: payload.ownerWallet,
    createdByUID: _user.uid,
    createdByName: _user.displayName,
    createdByEmail: _user.email,
    createdAt: currentTime,
    updatedAt: currentTime,
  };

  try {
    await addDoc(collection(db, "seeds"), data)
    .then((docRef) => {
      console.log("Documento escrito com ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Erro ao adicionar o documento: ", error);
    });
  } catch (error) {
    console.error("Erro ao adicionar semente", error);
  }  
}

export async function getSeeds() {
  console.log("Get Seeds functions tem que ser implementada");
}

export async function addMentor(payload) {
  const _user = await getCurrentUser();
  const currentTime = new Date();
  let data = {
    name: payload.name,
    email: payload.email,
    createdByUID: _user.uid,
    createdByName: _user.displayName,
    createdByEmail: _user.email,
    createdAt: currentTime,
    updatedAt: currentTime,
  };
  await addDoc(collection(db, "mentors"), data)
    .then((docRef) => {
      console.log("Mentor registrado com sucesso no ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Erro ao adicionar mentor", error);
    });
}

export async function editMentor(id, updatedData) {
  const mentorsRef = collection(db, "mentors");
  const mentorDoc = doc(mentorsRef, id);

  try {
    await updateDoc(mentorDoc, updatedData);
    console.log("Mentor editado com sucesso!");
  } catch (error) {
    console.error("Erro ao editar mentor: ", error);
  }
}

export async function deleteMentor(id) {
  const mentorsRef = collection(db, "mentors");
  const mentorDoc = doc(mentorsRef, id);

  try {
    await deleteDoc(mentorDoc);
    console.log("Mentor excluído com sucesso!");
  } catch (error) {
    console.error("Erro ao excluir mentor: ", error);
  }
}

export async function getProofs(safId) {  
     const docRef = collection(db, "proof-of-sucessions");
     const q = query(docRef, where("safId", "==", safId));
 
     try {
      const querySnapshot = await getDocs(q);
      const proofs = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      return proofs;
   } catch (error) {
      console.error("Erro ao buscar provas de sucessão:", error);
      return null;
   }
 }

 export async function getSpecies() {
  const speciesRef = collection(db, "species");
  let species = [];

  try {
    const querySnapshot = await getDocs(speciesRef);
    querySnapshot.forEach((doc) => {
      species.push({ id: doc.id, ...doc.data() });
    });
  } catch (error) {
    console.error("Erro ao buscar todas as espécies: ", error);
  }

  return species;
}

export async function addSpecie(payload) {
  const _user = await getCurrentUser();
  const currentTime = new Date();
  let data = {
    name: payload.name,
    stratum: payload.stratum,
    succession: payload.succession,
    createdByUID: _user.uid,
    createdByName: _user.displayName,
    createdByEmail: _user.email,
    creatorAddress: _user.walletAddress,
    ownerAddress: _user.walletAddress,
    createdAt: currentTime,
    updatedAt: currentTime,
  };

  try {
    const docRef = await addDoc(collection(db, "species"), data);
    console.log("Espécie registrada com sucesso no ID: ", docRef.id);
  } catch (error) {
    console.error("Erro ao adicionar espécie", error);
  }
}

export async function updateSpecie(id, updatedData) {
  try {
    await db.collection("species").doc(id).update(updatedData);
    console.log("Espécie atualizada com sucesso.");
    return { success: true, message: "Espécie atualizada com sucesso." };
  } catch (error) {
    console.error("Erro ao atualizar espécie", error);
    return {
      success: false,
      message: "Erro ao atualizar espécie.",
      error: error,
    };
  }
}

export async function deleteSpecie(id) {
  const speciesRef = collection(db, "species");
  const speciesDoc = doc(speciesRef, id);

  try {
    await deleteDoc(speciesDoc);
    console.log("Espécie excluída com sucesso!");
  } catch (error) {
    console.error("Erro ao excluir espécie: ", error);
  }
}




