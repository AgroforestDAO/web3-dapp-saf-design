import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
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


export { addUser };