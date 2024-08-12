
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAeyAAv7PRPjIfpZii-f8itxNNEvP1ltRU",
    authDomain: "amicablegym-33569.firebaseapp.com",
    databaseURL: "https://amicablegym-33569-default-rtdb.firebasedatabase.app",
    projectId: "amicablegym-33569",
    storageBucket: "amicablegym-33569.appspot.com",
    messagingSenderId: "296265358631",
    appId: "1:296265358631:web:58b22a72c41255720a5d02"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  import {getDatabase}



 var database = firebase.databae();

 var FirstName= document.getElementById("FirstName").value
 var LastName = document.getElementById("LastName").value
 var email = document.getElementById("email").value
 var password = document.getElementById("password").value
 var typepassword = document.getElementById("typepassword").value


 function save()  {
   
    database.ref('users/' + usename).set({
        FirstName : FirstName,
        LastName: LastName,
        email : email,
        password : password,
        typepassword : typepassword
    })
    alert('save')
 }



//  function get()  {=}

//  function update()  {=}

//  function remove()  {=}