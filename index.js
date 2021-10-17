  //hambuger action

  document.querySelector(".hambuger").addEventListener("click", function () {
      document.querySelector(".hambuger-stick__one").classList.toggle("rotate-one")
      document.querySelector(".hambuger-stick__two").classList.toggle("rotate-two")
      document.querySelector(".mobile-list").classList.toggle("display")
  })


 
  
  
 
  
  
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyBEVEvhhVGkhu0w4EdXdcpTMEMF2vz5Q0I",
      authDomain: "portfoliowork1-4e607.firebaseapp.com",
      projectId: "portfoliowork1-4e607",
      storageBucket: "portfoliowork1-4e607.appspot.com",
      messagingSenderId: "444942867570",
      appId: "1:444942867570:web:eaf30d4ff84b36244676eb",
      databaseUrl:"https://portfoliowork1-4e607-default-rtdb.firebaseio.com/"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


  
var messagesRef = firebase.database().ref('messages');

  //listen for form submit
  document.getElementById('log-in__form').addEventListener("submit", submitForm);

//submit form
  function submitForm(e) {
      e.preventDefault();
      //get email value
      var mail = document.getElementById('mail').value;
      console.log(mail);
      saveMessage(mail);

      //show alert
      document.querySelector('.alert').style.display = 'block';

      //hide after three seconds
      setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
      },3000 );

      //reset after submit
      document.getElementById('log-in__form').reset(); 
  }

  //save message to firebase
  function saveMessage(mail){
      var newMessageRef = messagesRef.push();
      newMessageRef.set({
          mail:mail
      });
  }

 