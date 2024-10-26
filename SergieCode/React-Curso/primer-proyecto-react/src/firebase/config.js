// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, uploadBytes } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDMrQaP0QBF4F7HgbYP7AycAdAVu11-M94",
    authDomain: "datos-de-formulario-46a44.firebaseapp.com",
    projectId: "datos-de-formulario-46a44",
    storageBucket: "datos-de-formulario-46a44.appspot.com",
    messagingSenderId: "619982182792",
    appId: "1:619982182792:web:1f95804df843a2357f823d",
    measurementId: "G-R4GF7Q06LD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const analytics = getAnalytics(app);

export function uploadFile(file) {
    console.log("que pedo cachorros");

    const storageRef = ref(storage, 'images/' + file.name);
    uploadBytes(storageRef, file).then((snapshot) => {
        console.log('Uploaded a blob or file!', snapshot);
    }).catch((error) => {
        console.error('Upload failed', error);
    });
}