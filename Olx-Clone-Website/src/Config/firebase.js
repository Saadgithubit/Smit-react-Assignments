import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, collection, getDocs, doc, where, query, addDoc, getDoc, setDoc, deleteDoc, updateDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL, } from "firebase/storage";
import Swal from 'sweetalert2'

// or via CommonJS

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
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


async function register(userDetails) {
  const { fullName, email, password, contact } = userDetails

  const { user: { uid } } = await createUserWithEmailAndPassword(auth, email, password)

  const userRef = doc(db, 'users', uid);
  await setDoc(userRef, { fullName, email, contact, password });
  Swal.fire({
    title: "Good job!",
    text: "Register Successfull!",
    icon: "success"
  });

}

async function logIn(userDetails) {
  const { email, password } = userDetails

  await signInWithEmailAndPassword(auth, email, password)

  Swal.fire({
    title: "Good job!",
    text: "Sign In Successfull!",
    icon: "success"
  });

}
async function getAllDataFromFirebase() {

  const querySnapshot = await getDocs(collection(db, "adds"));
  const products = []
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    products.push({ id: doc.id, ...doc.data() })
  });

  return products;
}

async function getSingleData(id) {
  const docRef = doc(db, "adds", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const ad = docSnap.data()
    return ad
    // console.log("Document data:", docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }

}

async function getUserAdds(id) {

  const adRef = collection(db, "adds")
  const querySnapshot = await getDocs(query(adRef, where("userId", "==", id)));
  // console.log(userId);

  const adds = []
  querySnapshot.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data());
    adds.push({ id: doc.id, ...doc.data() })
    // console.log(adds);
  });
  return adds
}

async function deleteSingleAdd(id) {
  await deleteDoc(doc(db, "adds", id))

}

async function editSingleAdd(updated,id) {
  const updateAdd = doc(db, "adds", id);
  

    await updateDoc(updateAdd, updated);
   
  
}

async function addPostToDb(add) {
  const imagesUrls = [];
  try {
    await Promise.all(add.allImages.map(async (image) => {
      const storageRef = ref(storage, `${image.name}`);
      await uploadBytes(storageRef, image);
      const url = await getDownloadURL(storageRef);
      imagesUrls.push(url);
    }));

    add.images = imagesUrls;
    console.log(imagesUrls);

    const docRef = await addDoc(collection(db, "adds"), {
      title: add.title,
      amount: add.amount,
      description: add.description,
      images: add.images,
      userLocation: add.userLocation,
      userlocationName: add.userLocationName,
      userId: add.userId
    });
    Swal.fire({
      title: "Good job!",
      text: "Post Add Successfull!",
      icon: "success"
    });
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error.message,
    });
  }
}

async function getUser(uid) {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const userDetail = docSnap.data()
    return userDetail

  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }

}


async function logOut() {
  await signOut(auth)
    .then(() => {
      Swal.fire({
        title: "Good job!",
        text: "Sign-out successfull!",
        icon: "success"
      });
      // Sign-out successful.
    }).catch((error) => {
      alert(error)
      // An error happened.
    });
}


export {
  register,
  logIn,
  getAllDataFromFirebase,
  getSingleData,
  auth,
  addPostToDb,
  getUser,
  onAuthStateChanged,
  logOut,
  getUserAdds,
  deleteSingleAdd,
  editSingleAdd
}
