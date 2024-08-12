// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";

import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCKdqKP4_U1ta2QQza6lGWyORYCNr2FzQs",
    authDomain: "fitness--aunthentication.firebaseapp.com",
    projectId: "fitness--aunthentication",
    storageBucket: "fitness--aunthentication.appspot.com",
    messagingSenderId: "796825069947",
    appId: "1:796825069947:web:1e369d2845677d993b75de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



// submit
const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
    event.preventDefault()

    // inputs
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // alert("logging Account...")
            // ...
            window.location.href = "./Home.html"
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            // alert(errorMessage)
        });
})