let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById("reset-button").style.display = "none";

function checkGuess() {
    let userGuess = Number(document.getElementById("number-input").value);

    if (!userGuess || userGuess < 1 || userGuess > 100) {
        document.getElementById("message").textContent = "Please enter a number between 1 and 100.";
        return;
    }
    attempts++;
    if (userGuess < secretNumber) {
        document.getElementById("message").textContent = "Too low! Try again.";
    }
    else if (userGuess > secretNumber) {
        document.getElementById("message").textContent = "Too high! Try again.";
    }
    else {
        document.getElementById("message").textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        document.getElementById("submit-button").style.display = "none";
        document.getElementById("reset-button").style.display = "inline-block";
    }
}

function resetGame(){
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("message").textContent = "";
    document.getElementById("number-input").value = "";
    document.getElementById("reset-button").style.display = "none";
    document.getElementById("submit-button").style.display = "inline-block";
}
