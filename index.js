const userPuntuation = document.querySelector(".puntuation__user-puntuation");
const pcPuntuation = document.querySelector(".puntuation__pc-puntuation");
const userChoiceDiv = document.querySelector(".game__user-choice");
const pcChoiceDiv = document.querySelector(".game__pc-choice");
const gameResult = document.querySelector(".game-result")

const rockButton = document.querySelector("#rock")
const paperButton = document.querySelector("#paper")
const scissorsButton = document.querySelector("#scissors")

let userScore = 0;
let pcScore = 0;

const playGame = (e) => {
    const buttonClicked = e.target.id.toUpperCase();
    userChoiceDiv.textContent = buttonClicked;
    const pcChoice = randomPcChoice();
    pcChoiceDiv.textContent = pcChoice;
    const result = getGameWinner(buttonClicked, pcChoice)
    if (result === "WIN") {
        gameResult.textContent = "YOU WIN"
        userScore+=1
        userPuntuation.textContent = userScore
    } else if (result === "LOSE") {
        gameResult.textContent = "YOU LOSE"
        pcScore+=1
        pcPuntuation.textContent = pcScore
    } else {
        gameResult.textContent = "DRAW"
    }
    if (userScore + pcScore == 5 || pcScore === 3 || userScore === 3) {
        rockButton.removeEventListener('click', playGame)
        paperButton.removeEventListener('click', playGame)
        scissorsButton.removeEventListener('click', playGame)
        gameResult.textContent = `THE WINNER IS ${(userScore > pcScore) ? "USER" : "PC"}`
    }
}

rockButton.addEventListener('click', playGame)
paperButton.addEventListener('click', playGame)
scissorsButton.addEventListener('click', playGame)

const randomPcChoice = () => {
    const randomNumber = Math.round(Math.random()*2)
    switch (randomNumber) {
        case 0:
            return "ROCK"
        case 1:
            return "PAPER"
        case 2:
            return "SCISSORS"
    }
}

const getGameWinner = (user, pc) => {
    switch (user) {
        case "ROCK":
            if (pc === "SCISSORS") {
                return 'WIN'
            } 
            if (pc === "ROCK") {
                return 'DRAW'
            } 
            if (pc === "PAPER"){
                return 'LOSE'
            }
        case "PAPER":
            if (pc === "ROCK") {
                return 'WIN'
            } 
            if (pc === "PAPER") {
                return 'DRAW'
            } 
            if (pc === "SCISSORS"){
                return 'LOSE'
            }
        case "SCISSORS":
            if (pc === "PAPER") {
                return 'WIN'
            } 
            if (pc === "SCISSORS") {
                return 'DRAW'
            } 
            if (pc === "ROCK"){
                return 'LOSE'
            }    
    }
}