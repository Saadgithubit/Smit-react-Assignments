import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import{ getFirestore , collection,  addDoc, deleteDoc, updateDoc, setDoc,query, where, getDocs, doc, getDoc,orderBy} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js"
import { getStorage , ref, uploadBytes, getDownloadURL,  }
 from "https://www.gstatic.com/firebasejs/10.6.0/firebase-storage.js"

 const firebaseConfig = {
  apiKey: "AIzaSyD0CbzxPtsrdDpY7Gfx5BSV0FRi1rmPxkY",
  authDomain: "assignment-project-olx.firebaseapp.com",
  projectId: "assignment-project-olx",
  storageBucket: "assignment-project-olx.appspot.com",
  messagingSenderId: "77707488787",
  appId: "1:77707488787:web:22477ac7202bb966a899e6",
  measurementId: "G-3XVL68Q8DK"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

async function getAllData(){

const querySnapshot = await getDocs(collection(db, "adds"));

const adds = []
querySnapshot.forEach((doc) => {
    const add = doc.data()
    add.id = doc.id
    adds.push(add)
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});
return adds;
}

async function getSingleAdd(addId){
    const docRef = doc(db, "adds",  addId);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    // console.log("Document data:", docSnap.data());
    const add = docSnap.data()
  
    return add
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
   }

export {
    getAllData,
    getSingleAdd
}