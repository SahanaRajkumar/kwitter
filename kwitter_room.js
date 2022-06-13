var firebaseConfig = {
      apiKey: "AIzaSyCudgltimhhfNVpB7XMdnbRS0kZaWIO4V0",
      authDomain: "kwitter-9267c.firebaseapp.com",
      databaseURL: "https://kwitter-9267c-default-rtdb.firebaseio.com",
      projectId: "kwitter-9267c",
      storageBucket: "kwitter-9267c.appspot.com",
      messagingSenderId: "963426485055",
      appId: "1:963426485055:web:91ba8a30d6b1732f1e498a"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({

           purpose: "adding Room name"
          });
          localStorage.setItem("room_name",room_name);
    }
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout(){

      localStorage.removeItem("user_name");
      // localStorage.removeItem("room_name");
      window.location="index.html";

}