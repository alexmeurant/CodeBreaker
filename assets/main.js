<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="assets/main.css" />
    <title>Code Breaker</title>
  </head>
  <body>
    <div class="container">
      <div class="col-md-6">
        <h1>Code Breaker</h1>
        <div class="row">
          <p id="code" class="code">
            <strong>????</strong>
          </p>
        </div>

        <div id="guessing-div" class="row form-inline">
          <input type="hidden" id="attempt"/>
          <input type="hidden" id="answer"/>
          <input id="user-guess" class="form-control" type="number" />
          <button class="btn btn-primary" onclick="guess()">Submit Guess</button>
        </div>

        <div id="replay-div" class="row" style="display:none">
          <button class="btn btn-primary" onclick="window.location.reload()">Play again?</button>
        </div>

        <div class="row">
          <p id="message" class="message"></p>
        </div>

        <div class="row" id="results">
          <div class="row">
            <strong class="col-md-6">Guess</strong>
            <strong class="col-md-6">Result</strong>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <h2>Objective:</h2>
        <p class="lead">Guess the randomly generated 4 digit code.</p>

        <h2>Rules:</h2>
        <ul>
          <li>Each guess must consist of 4 numeric characters.</li>
          <li>Numbers may be used more than once!</li>
          <li>You win only if your guess is an exact match.</li>
          <li>You lose if you fail to guess the code under 10 guesses.</li>
          <li>
            <span class="glyphicon glyphicon-ok"></span>
            Indicates a number is in the correct place.
          <li>
            <span class="glyphicon glyphicon-transfer"></span>
            Indicates a number is part of the code, but not in the right position.
          </li>
          <li>
            <span class="glyphicon glyphicon-transfer"></span>
            Doesn't consider how many times a number exists in the code.
          </li>
          <li>
            <span class="glyphicon glyphicon-remove"></span>
            Indicates a number is not part of the code.
          </li>
        </ul>
      </div>
    </div>
    <script src="assets/main.js"></script>
  </body>
</html>