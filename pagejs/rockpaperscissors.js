// This code can be used together with html and it play
// rock paper scissors entirely in the console


var humanScore = 0;
var computerScore = 0;

/**
 * Gets a random int and returns rock paper os sciccorr
 */

function getComputerChoice() {

    var randomInt = Math.floor(Math.random() * 3)
    if (randomInt === 0) {
        return "rock"
    } else if (randomInt === 1) {
        return "scissors"
    } else {
        return "paper"
    }
}

/**
 *  Returns the human choice of rock, paper or scissors
 * */
function getHumanChoice() {
    // declearing a variable called choice
    let choice;
    // continues to ask until rock, paper or scissors is written
    while (true) {
        choice = window.prompt("Rock, paper, or scissors?").toLowerCase();
        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            return choice;
        } else {
            window.alert("Invalid choice! Please enter rock, paper, or scissors.");
        }
    }
}

/**
 * This function plays one round of rock paper sciccors
 */
function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
        console.log("You both chose " + humanChoice + " It's a tie.")
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    console.log("current score human: " + humanScore )
    console.log("current score computer: " + computerScore )
}

/**
 * This functions plays a whole game of rock, paper, scissors
 * You can choose how many rounds to play in this function.
 */
function playGame() {
    for(let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }
}

playGame()
