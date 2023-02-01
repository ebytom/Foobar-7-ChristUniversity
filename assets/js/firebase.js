// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
// import firebase from "firebase/app";
// import "firebase/analytics";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBDOoAg7rQ-_e5dduEG3-FX7XvQPiiNQ28",
    authDomain: "foobar-956a3.firebaseapp.com",
    projectId: "foobar-956a3",
    storageBucket: "foobar-956a3.appspot.com",
    messagingSenderId: "906024644766",
    appId: "1:906024644766:web:72bd2a657f58c4b6ddcb8f"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
// firebase.initializeApp(firebaseConfig);
// const analytics = firebase.analytics();