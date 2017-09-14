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