import {
  doc,
  //setDoc,
  //getDoc,
  //updateDoc,
  addDoc,
  deleteDoc,
  collection,
  //query,
  //where,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase";
//import { getCurrentUser } from "../services/firebaseService";


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

export async function addSpecie(payload, user) {
  const currentTime = new Date();
  let data = {
      name: payload.name,
      stratum: payload.stratum,
      succession: payload.succession,
      productionCicle: payload.productionCicle,
      createdByUID: user.uid,
      createdByName: user.displayName,
      createdByEmail: user.email,
      creatorAddress: user.walletAddress,
      ownerAddress: user.walletAddress,
      isValidated: false,
      createdAt: currentTime,
      updatedAt: currentTime,
  };
  
  try {
      const docRef = await addDoc(collection(db, "species"), data);
      console.log("Espécie registrada com sucesso no ID: ", docRef.id);
      return {
        success: true,
        message: "Espécie registrada com sucesso.",
        id: docRef.id,
      };
  } catch (error) {
      console.error("Erro ao adicionar espécie", error);
      return {
        success: false,
        message: "Erro ao adicionar espécie.",
        error: error,
      };
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
