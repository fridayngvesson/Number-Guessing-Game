let attempts = 0;
let randomNum = Math.floor(Math.random() * 100 + 1)

const guess = document.querySelector('#guess');
const submit = document.querySelector('#submit');
const hint = document.querySelector('#hint');
const attemptsText = document.querySelector('#attempts');

submit.addEventListener("click", checkGuess);

function checkGuess() {
    const userValue = Number(guess.value);
    attempts++;

    if(userValue === randomNum) {
        hint.textContent =
        "Congratulations, you guessed it!";
    } else if (userValue < randomNum) { 
        hint.textContent =
        "Too low! Try again.";
    } else {  hint.textContent =
        "Too high! Try again.";
    }  

    attemptsText.textContent = "Attempts: " + attempts;
} 