
function playerScissors() {

    let computerChoice = Math.random();


    if (computerChoice <= 0.33) {
        computerChoice = "rock";
        computerScore++
        console.log(`Comp ${computerScore}`)
    }

    if (computerChoice > 0.33 && computerChoice <= 0.66) {
        computerChoice = "paper";
        playerScore++
        console.log(`Player ${playerScore}`)
    }

    if (computerChoice > 0.66 && computerChoice <= 1) {
        computerChoice = "scissors";
        drawScore++
        console.log(`Draws ${drawScore}`)
    }

    let playerChoice = "scissors"


    if (playerChoice == computerChoice) {
        return alert("Computer Coice: Scissors - The result is a tie!");
    }
    if (computerChoice == "rock") {
        return alert("Computer Choice: Rock - Computer Wins");
    }
    if (computerChoice == "paper") {
        return alert("Computer Choice: Paper - You Win!");
    }
}


function playerPaper() {

    let computerChoice = Math.random();


    if (computerChoice <= 0.33) {
        computerChoice = "rock";
        playerScore++

    }

    if (computerChoice > 0.33 && computerChoice <= 0.66) {
        computerChoice = "paper";
        drawScore++

    }

    if (computerChoice > 0.66 && computerChoice <= 1) {
        computerChoice = "scissors";
        computerScore++

    }

    let playerChoice = "paper"


    if (playerChoice == computerChoice) {
        return alert("Computer Coice: Paper - The result is a tie!");
    }
    if (computerChoice == "rock") {
        return alert("Computer Choice: Rock - You Win!");
    }
    if (computerChoice == "scissors") {
        return alert("Computer Choice: Scissors - Computer Wins");
    }
}



function playerRock() {

    let computerChoice = Math.random();


    if (computerChoice <= 0.33) {
        computerChoice = "rock";
        drawScore++
    }

    if (computerChoice > 0.33 && computerChoice <= 0.66) {
        computerChoice = "paper";
        computerScore++

    }

    if (computerChoice > 0.66 && computerChoice <= 1) {
        computerChoice = "scissors";
        playerScore++

    }

    let playerChoice = "rock"


    if (playerChoice == computerChoice) {
        return alert("Computer Coice: Rock - The result is a tie!");
    }
    if (computerChoice == "paper") {
        return alert("Computer Choice: Paper - Computer Wins ");
    }
    if (computerChoice == "scissors") {
        return alert("Computer Choice: Scissors - You Win!");
        
    }
}


let playerScore = 0
let computerScore = 0
let drawScore = 0
 





