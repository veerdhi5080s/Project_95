var firebaseConfig = {
      apiKey: "AIzaSyDbz5cLDF5ybRHTU3s7coaGtb4ybNlAwPM",
      authDomain: "kwitter-97338.firebaseapp.com",
      databaseURL: "https://kwitter-97338-default-rtdb.firebaseio.com",
      projectId: "kwitter-97338",
      storageBucket: "kwitter-97338.appspot.com",
      messagingSenderId: "238105210406",
      appId: "1:238105210406:web:7cff4cd3121c7adc2a00e7"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
