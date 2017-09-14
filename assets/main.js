let answer = document.getElementById('answer').value;

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