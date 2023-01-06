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

user_name= localStorage.getItem("user_name");
    room_name= localStorage.getItem("room_name");

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}
//End code
      } });  }); }
getData();