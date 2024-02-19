import { doc, setDoc, getDoc, updateDoc, addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';

async function addUser(user) {
  const userRef = doc(db, 'users', user.uid);
  const docSnap = await getDoc(userRef);
  const currentTime = new Date();

  if (!docSnap.exists()) {
    await setDoc(userRef, {
      displayName: user.displayName,
      email: user.email,
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

async function addSaf(selectedSpecies) {  
  const currentTime = new Date();
  let data = {    
    createdAt: currentTime,
    updatedAt: currentTime,
    species: selectedSpecies
    }

  await addDoc(collection(db, "safs"), data)
      .then((docRef) => {
          console.log("Documento escrito com ID: ", docRef.id);
      })
      .catch((error) => {
          console.error("Erro ao adicionar o documento: ", error);
      });
  
};


export { addUser, addSaf };
