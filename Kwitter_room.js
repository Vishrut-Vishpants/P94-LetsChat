var firebaseConfig = {
    apiKey: "AIzaSyDZUH7rj0UUKhXpC5R-vNroX-oWLmUSfAo",
    authDomain: "letschatwebapp-b5ed7.firebaseapp.com",
    databaseURL: "https://letschatwebapp-b5ed7-default-rtdb.firebaseio.com",
    projectId: "letschatwebapp-b5ed7",
    storageBucket: "letschatwebapp-b5ed7.appspot.com",
    messagingSenderId: "478057097497",
    appId: "1:478057097497:web:c22077c912669ca79dbd88"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addroom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose:"addinguser"
    });
} 