const firebaseConfig = {
    apiKey: "AIzaSyAh4HdFhLxko8KbJeC24D-i4nMhjh-RxO8",
    authDomain: "tiwlocauth.firebaseapp.com",
    projectId: "tiwlocauth",
    storageBucket: "tiwlocauth.appspot.com",
    messagingSenderId: "121621476354",
    appId: "1:121621476354:web:467b523ad48e8bf590e31b",
    measurementId: "G-SX18B0KJRT"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);
var database = firebase.database();



