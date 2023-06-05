// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Firebase elements
const auth = firebase.auth();
const firestore = firebase.firestore();

// DOM elements
const loginDiv = document.getElementById('loginDiv');
const signupDiv = document.getElementById('signupDiv');
const userDiv = document.getElementById('userDiv');
const userEmail = document.getElementById('userEmail');

// Login function
function login() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      userDiv.style.display = 'block';
      userEmail.textContent = email;
      loginDiv.style.display = 'none';
      signupDiv.style.display = 'none';
      window.location.href = 'game.html'; // Redirect to game.html
    })
    .catch((error) => {
      alert('Login failed. ' + error.message);
    });
}

// Signup function
function signup() {
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert('Signup successful! Please login.');
      loginDiv.style.display = 'block';
      signupDiv.style.display = 'none';
    })
    .catch((error) => {
      alert('Signup failed. ' + error.message);
    });
}

// Logout function
function logout() {
  auth.signOut()
    .then(() => {
      loginDiv.style.display = 'block';
      signupDiv.style.display = 'block';
      userDiv.style.display = 'none';
    })
    .catch((error) => {
      alert('Logout failed. ' + error.message);
    });
}

// Check user authentication state
auth.onAuthStateChanged((user) => {
  if (user) {
    userDiv.style.display = 'block';
    userEmail.textContent = user.email;
    loginDiv.style.display = 'none';
    signupDiv.style.display = 'none';
    window.location.href = 'game.html'; // Redirect to game.html
  } else {
    userDiv.style.display = 'none';
    loginDiv.style.display = 'block';
    signupDiv.style.display = 'block';
  }
});

