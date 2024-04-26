// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Swal from 'sweetalert2'


const firebaseConfig = {
    apiKey: "AIzaSyBB2g3SQ4axW8Ah2XcxgVh0vrhtmVBqYvI",
    authDomain: "eccomerce-clone-website.firebaseapp.com",
    projectId: "eccomerce-clone-website",
    storageBucket: "eccomerce-clone-website.appspot.com",
    messagingSenderId: "735243118438",
    appId: "1:735243118438:web:ca6cdb58dd9b633f6d8aa7",
    measurementId: "G-CN1YTFV3BR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);


export async function postAd(userToken, postData) {

    try {
        //     // Upload image to Firebase Storage
        const storageRef = ref(storage, postData.image.name);
        await uploadBytes(storageRef, postData.image);

        // Get the download URL of the uploaded image
        const imageUrl = await getDownloadURL(storageRef);
        postData.image = imageUrl

        const response = await fetch('https://repulsive-turtleneck-shirt-ant.cyclic.app/ads/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`
            },
            body: JSON.stringify({
                title: postData.title,
                amount: postData.amount,
                description: postData.description,
                images: postData.image
            })
        });
        const result = await response.json();
        if(result.message !== 'Ad posted successfully'){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: result.message,
              });
              return
        }
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: result.message,
            showConfirmButton: false,
            timer: 1500
          });

    } catch (error) {
        alert('Something went wrong',error);
    }
}