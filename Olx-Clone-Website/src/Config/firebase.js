import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, collection, getDocs, doc, addDoc, getDoc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL, } from "firebase/storage";

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

  alert('Register Successfull')

}

async function logIn(userDetails) {
  const { email, password } = userDetails

  await signInWithEmailAndPassword(auth, email, password)

  alert('Log In Successfull')

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
    console.log("Document data:", docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }

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

    console.log(add.url);
    const docRef = await addDoc(collection(db, "adds"), {
      title: add.title,
      amount: add.amount,
      description: add.description,
      images: add.images
    });
    alert('Post Add Successful');
  } catch(error) {
    console.error('Error saving images URL', error.message);
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


function logOut() {
  signOut(auth)
    .then(() => {
      alert('Sign-out successful')
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
}