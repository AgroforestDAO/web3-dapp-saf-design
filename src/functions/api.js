import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

async function getCurrentUser() {
  const auth = getAuth();
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      async (user) => {
        unsubscribe();
        if (user) {
          const db = getFirestore();
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

export { getCurrentUser };