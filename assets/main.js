let answer = document.getElementById('answer').value;
let divHTML = "";
let correctCharacter;
let attempt = document.getElementById('attempt').value;
const results = document.getElementById('results');
const message = document.getElementById('message');
const code = document.getElementById('code');
const hideGuessingDiv = document.getElementById('guessing-div');
const showReplayDiv = document.getElementById('replay-div');

// Main functions that includes all other functions:
function guess() {

    let input = document.getElementById('user-guess').value;

    message.innerHTML = "";

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
        correctCharacter = 0;
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

    // This function shows the random code to be guessed :
    function showAnswer(isTrue) {
        code.innerHTML = answer;
        if (isTrue) {
            code.className += " success";
        } else {
            code.className += " failure";
        }
    }

    // This function gives the user the opportunity to play again :
    function showReplay() {
        // the guessing block is hidden:
        hideGuessingDiv.style.display = "none";
        // the repaly block is displayed:
        showReplayDiv.style.display = "block";
    }

    /* ------------------------------------------------------------------------
                   All functions above (inside guess()) are called here:
    --------------------------------------------------------------------------*/

    if (answer === "") {
        setHiddenFields();
    }
    if (attempt === "") {
        attempt = 0;
    }

    validateInput(input);

    if (!validateInput(input)) {
        return false;
    } else {
        attempt += 1;
    }

    getResults(input);
    results.innerHTML += divHTML;

    // Message and results are shown depending on the situation :
    if (getResults(input)) {
        setMessage("You Win! :)");
        showAnswer(getResults(input));
        showReplay();
    } else if (!getResults(input) && attempt < 10) {
        setMessage("Incorrect, try again.");
    } else if (attempt >= 10) {
        setMessage("You Lose! :(");
        showAnswer(getResults(input));
        showReplay();
    }
}
