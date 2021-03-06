function guess() {
    
    let answer = document.getElementById('answer').value;
    let divHTML = "";
    let attempt = document.getElementById('attempt').value;
    const results = document.getElementById('results');
    const message = document.getElementById('message');
    const code = document.getElementById('code');
    const hideGuessingDiv = document.getElementById('guessing-div');
    const showReplayDiv = document.getElementById('replay-div');
    let input = document.getElementById('user-guess').value;

    message.innerHTML = "";
    
    // This function gives the user the opportunity to play again :
    function showReplay() {
        // the guessing block is hidden:
        hideGuessingDiv.style.display = "none";
        // the repaly block is displayed:
        showReplayDiv.style.display = "block";
    }

    // generates a random number with exactly 4 digits :
    if (answer === "") {
        answer = Math.floor(Math.random() * 10000).toString();
        if (answer.length !== 4) {
            while (answer.length < 4) {
                answer = "0" + answer;
            }
        }
        document.getElementById('answer').value = answer;
    }

    // attempt number is set to 0 at the beginning:
    if (attempt === "") {
        attempt = 0;
    }

    // checks if the guessed number has 4 digits :
    if (input.length === 4) {
        attempt++;
        document.getElementById('attempt').value = attempt;
    } else {
        message.innerHTML = "Guesses must be exactly 4 characters long.";
        return;
    }

    // gets the results and indications about the character's position :
    let correctCharacter = 0;
    divHTML = '<div class="row"><span class="col-xs-6">' + input + '</span><div class="col-xs-6">';

    for (var i = 0; i < input.length; i++) {
        let guessCharacter = input.charAt(i);
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
    
    // displays the result's block:
    results.innerHTML += divHTML;
    
    // Message and results are shown depending on the situation :
    if (correctCharacter === 4) {
        message.innerHTML = "You Win! :)";
        code.className += " success";
        showReplay();
        return code.innerHTML = answer;
    } else if (attempt < 10){
        message.innerHTML = "Incorrect, try again.";
    } else if (attempt >= 10){
        message.innerHTML = "You Lose! :(";
        code.className += " failure";
        showReplay();
        return code.innerHTML = answer;
    }
}
