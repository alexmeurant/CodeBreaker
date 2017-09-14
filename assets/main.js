let answer = document.getElementById('answer').value;
let divHTML = "";

 // This function generates a random number with exactly 4 digits :
 function setHiddenFields() {
     answer = Math.floor(Math.random() * 10000).toString();
     if (answer.length !== 4) {
         while (answer.length < 4) {
             answer = "0" + answer;
         }
     }
     return answer;
 }

// This function displays a custom message when called :
 function setMessage(text) {
     let message = document.getElementById('message');
     message.innerHTML = text;
 }

 // This function checked if the guessed number has 4 digits :
 function validateInput(guessNumber) {
     if (guessNumber.length === 4) {
         return true;
     } else {
         setMessage("Guesses must be exactly 4 characters long.");
         return false;
     }
 }

 // This function get the results and indications about the digit position :
 function getResults(guessNumber) {
     let correctCharacter = 0;
     divHTML = '<div class="row"><span class="col-md-6">' + guessNumber + '</span><div class="col-md-6">';

     for (var i = 0; i < guessNumber.length; i++) {
         let guessCharacter = guessNumber.charAt(i);
         if (guessCharacter === answer.charAt(i)) {
             divHTML += '<span class="glyphicon glyphicon-ok"></span>';
             correctCharacter += 1;
         } else if (answer.indexOf(guessCharacter) > -1) {
             divHTML += '<span class="glyphicon glyphicon-transfer"></span>';
         } else {
             divHTML += '<span class="glyphicon glyphicon-remove"></span>';
         }
     }
     divHTML += '</div></div>';


     if (correctCharacter === 4) {
         return true;
     } else {
         return false;
     }
 }