'use strict';

var unityFirebaseGameOjbectName = 'JavascriptMessageReceiver';
 
function onAuthStateChanged(user) { 
  if(!user)
  {
    signInAnonymously();
  }
  else
  {
    sendAuthDataToUnity();
  }
}

function signInAnonymously()
{
  firebase.auth().signInAnonymously().catch(function(error) {
    var errorCode = error.code;
    console.log("error logging in " + errorCode);
    console.error(error);
  });
}

function signInWithEmail(email, password)
{
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log("signInWithEmailAndPassword Success");
    }) 
    .catch(function(error) 
    {
      console.log("error logging in " + error.code);
      console.error(error);
      window.unityGame.SendMessage(unityFirebaseGameOjbectName, "firebaseSignInWithEmailFailed", error.message);
  });
}

function createUserWithEmail(email, password)
{  
  if(firebase.auth().currentUser != null && firebase.auth().currentUser.isAnonymous)
  {
    var credential = firebase.auth.EmailAuthProvider.credential(email, password);
    firebase.auth().currentUser.linkWithCredential(credential).then(function(user) {
      console.log("Anonymous account successfully upgraded", user);
      sendAuthDataToUnity();
    }, function(error) {
      console.log("Error upgrading anonymous account", error);
      console.error(error);
      window.unityGame.SendMessage(unityFirebaseGameOjbectName, "firebaseCreateUserWithEmailFailed", error.message);
    });
  }
}

function createUserWithGoogle()
{
  var provider = new firebase.auth.GoogleAuthProvider();

  if(firebase.auth().currentUser != null && firebase.auth().currentUser.isAnonymous)
  {
    if(isMobile())
    {
      firebase.auth().linkWithRedirect(provider);

      firebase.auth().getRedirectResult().then(function(result) 
      {
      }, function(error) 
      {
        console.error(error);
        console.log("createUserWithGoogle:Error" + error.code);
        window.unityGame.SendMessage(unityFirebaseGameOjbectName, "firebaseCreateUserWithEmailFailed", error.message);
      });
    }
    else
    {
      firebase.auth().currentUser.linkWithPopup(provider).then((result) => 
      {
      }).catch((error) => 
      {
        console.log("createUserWithGoogle:: Error logging in " + error.code);
        console.error(error);
        window.unityGame.SendMessage(unityFirebaseGameOjbectName, "firebaseCreateUserWithEmailFailed", error.message);
      });
    }
  }
}

function signInWithGoogle()
{
  var provider = new firebase.auth.GoogleAuthProvider();

  if(isMobile())
  {
    firebase.auth().signInWithRedirect(provider);

    firebase.auth().getRedirectResult().then(function(result)
    {
    }, function(error) 
    {
      console.error(error);
      window.unityGame.SendMessage(unityFirebaseGameOjbectName, "firebaseSignInWithEmailFailed", error.message);
    });
  }
  else
  {
    firebase.auth().signInWithPopup(provider).then(function(result) 
    {
    },
    function(error) 
    {
      console.log("signInWithGoogle Error: " + error.code);
      console.error(error);
      window.unityGame.SendMessage(unityFirebaseGameOjbectName, "firebaseSignInWithEmailFailed", error.message);
    });
  }
}

function signOut()
{
  firebase.auth().signOut();
}

function sendAuthDataToUnity()
{
    if(window.unityGame != null && firebase.auth().currentUser != null)
    {     
      var firebaseUid = firebase.auth().currentUser.uid;
      var isAnon = firebase.auth().currentUser.isAnonymous;
      var data = {authToken:"",uid:firebaseUid,isAnonymous:isAnon};
      var dataJson = JSON.stringify(data);
      window.unityGame.SendMessage(unityFirebaseGameOjbectName, 'SetAuthToken', dataJson);
    }
}

function sendPasswordResetEmail(emailAddress)
{
  firebase.auth().sendPasswordResetEmail(emailAddress).then(function() {
    console.log("sendPasswordResetEmail:: Success");
    window.unityGame.SendMessage(unityFirebaseGameOjbectName, "SendPasswordResetEmailSuccess");
  }).catch(function(error) {
    console.log("sendPasswordResetEmail:: Failed ");
    window.unityGame.SendMessage(unityFirebaseGameOjbectName, "SendPasswordResetEmailFailed", error.message);
    console.error(error);
  });
}

function getValueOnUserNode(nodeKey) 
{
  if(firebase.auth().currentUser != null)
  {
    const dbRef = firebase.database().ref();
    const dbRefUserTest = dbRef.child("userTest");
    var uidstr = firebase.auth().currentUser.uid;
    dbRefUserTest.child(uidstr).once('value').then((snapshot) => {
      if (snapshot.exists()) 
      {
        console.log("auth.js::getValueOnUserNode - data exists");
        var valJsonStr = JSON.stringify(snapshot.val());
        window.unityGame.SendMessage(unityFirebaseGameOjbectName, "OnGetValueOnUserNodeSuccess", valJsonStr);
      } 
      else 
      {
        console.log("auth.js::getValueOnUserNode - node was empty");
        window.unityGame.SendMessage(unityFirebaseGameOjbectName, "OnGetValueOnUserNodeSuccess", "");
      }
    }).catch((error) => 
    {
      window.unityGame.SendMessage(unityFirebaseGameOjbectName, "OnGetValueOnUserNodeError", "");
      console.error(error);
    });
  }
}

function setValueOnUserNode(jsonData) 
{
  if(firebase.auth().currentUser != null)
  {
    const dbRef = firebase.database().ref();
    console.log("auth.js::setValueOnUserNode");
    const dbRefUserTest = dbRef.child("userTest");
    var uidstr = firebase.auth().currentUser.uid;
    var jsonObj = JSON.parse(jsonData)
    dbRefUserTest.child(uidstr).set(jsonObj, (error) => {
      if (error) {
        window.unityGame.SendMessage(unityFirebaseGameOjbectName, "OnSetValueOnUserNodeError", error.message);
      } else {
        window.unityGame.SendMessage(unityFirebaseGameOjbectName, "OnSetValueOnUserNodeSuccess");
      }
    });
  }
}

function updateValueOnUserNode(jsonData)
{
  if(firebase.auth().currentUser != null)
  {
    const dbRef = firebase.database().ref();
    console.log("auth.js::updateValueOnUserNode");
    const dbRefUserTest = dbRef.child("userTest");
    var uidstr = firebase.auth().currentUser.uid;
    var jsonObj = JSON.parse(jsonData)
    dbRefUserTest.child(uidstr).update(jsonObj, (error) => {
      if (error) {
        window.unityGame.SendMessage(unityFirebaseGameOjbectName, "OnUpdateValueOnUserNodeError", error.message);
      } else {
        window.unityGame.SendMessage(unityFirebaseGameOjbectName, "OnUpdateValueOnUserNodeSuccess");
      }
    });
  }
}

function getCurrentUserId()
{
  if(firebase.auth().currentUser != null)
  {
    return firebase.auth().currentUser.uid;
  }
  return "";    
}

function getCurrentUserIsAnon()
{
  if(firebase.auth().currentUser != null)
  {
    return firebase.auth().currentUser.isAnon;
  }
  return true;   
}

window.addEventListener('load', function() {
  console.log('Init Auth');
  if (typeof firebase !== 'undefined' && firebase.auth() != null) 
  {
    firebase.auth().onAuthStateChanged(onAuthStateChanged);
  }
}, false);