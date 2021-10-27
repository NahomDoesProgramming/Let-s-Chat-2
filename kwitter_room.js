username = localStorage.getItem("username");
document.getElementById("username").innerHTML = "Welcome " + username + "!";
var firebaseConfig = {
  apiKey: "AIzaSyB1CHJI9HxCzKjuVFcazwlXVvIzWRJtGEU",
  authDomain: "let-s-chat-c8016.firebaseapp.com",
  databaseURL: "https://let-s-chat-c8016-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-c8016",
  storageBucket: "let-s-chat-c8016.appspot.com",
  messagingSenderId: "521876500464",
  appId: "1:521876500464:web:2450217fdbd0dc7605b735",
  measurementId: "G-KSECJ34P4V"
};
firebase.initializeApp(firebaseConfig);
function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update
  ({
       purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       room_name = childKey;
      //Start code
    console.log("Room Name: " + room_name);
    row = "<div class='room_name' id=" + room_name + "onclick='redirectToRoomName(this.id);'>#" + room_name + "</div><hr>";
    document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
