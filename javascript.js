
//intialinzing elements;
let totalAttempts = 5;
let attempts = 0;
let totalWons = 0;
let totalLosts = 0;

//finding or selecting elements;
const cardBody = document.querySelector(".card-body");
const form = document.querySelector("form");
const guessingNumber = form.querySelector("#guessingNumber");
const checkBtn = form.querySelector("#check");
const resultText = cardBody.querySelector(".result-text");
const remainingAttempts = cardBody.querySelector(".attempts");
const lostWonMessage = document.createElement("p");


// 
form.addEventListener("submit", function (event) {
    event.preventDefault();
    attempts++;
    if (attempts == 5) {
        guessingNumber.disabled = true;
        checkBtn.disabled = true;
    } if (attempts < 6) {
        let guessNumber = Number(guessingNumber.value);
        checkResult(guessingNumber.value);
        remainingAttempts.innerHTML = `Remaining Attempts: ${totalAttempts - attempts}`;
    }
    guessingNumber.value = "";
})

function checkResult(guessingNumber) {
    console.log(guessingNumber);
    const randomNumber = getRandomNum(5);
    if (guessingNumber == randomNumber) {
        resultText.innerHTML = `You have won`;
        totalWons++;
    } else {
        resultText.innerHTML = `You have lost. Random number was : ${randomNumber}`;
        resultText.classList.add("result-text");
        totalLosts++;
    }

    lostWonMessage.innerHTML = `Won : ${totalWons},  Lost : ${totalLosts}`;
    lostWonMessage.classList.add("large-text");
    cardBody.appendChild(lostWonMessage);

}

//get random number;
function getRandomNum(limit) {
    return Math.floor(Math.random() * limit + 1);
}