let choices = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice(){
    let validate = false
    while (validate == false){
        let person = prompt("rock, paper or scissors? " );
        if (person == null){
            continue;
        }
        person = person.toLowerCase();
        if (choices.includes(person)) {
            validate = true;
            return person;
        }
    }
}

function checkWinner(humanChoice,computerChoice){
    if (humanChoice == computerChoice) {
        return 'Tie'
    }
    else if ((humanChoice =='rock' && computerChoice == 'scissors') ||
            (humanChoice =='paper' && computerChoice == 'rock') ||
            (humanChoice =='scissors' && computerChoice == 'paper')
    ){
        return 'Win';}
    else {
        return 'Lose';
    }

}

function playRound(humanChoice,computerChoice){
    const result = checkWinner(humanChoice,computerChoice)
    if (result == 'Tie'){
        return "Tie";
    }
    else if (result == 'Win'){
        return `You win! ${humanChoice} beats ${computerChoice}`;
    }
    else {
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    for (let i=0; i<5;i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const result = checkWinner(humanChoice,computerChoice);
        console.log(playRound(humanChoice,computerChoice));
        if (result == 'Win') {
            humanScore++;
        } 
        else if (result == 'Lose') {
            computerScore++;
        } 
    }
    if (humanScore > computerScore){
        console.log('You are the winner!')
    }
    else if (humanScore < computerScore){
        console.log('Computer wins :(')
    }
    else{
        console.log("It's a tie")
    }
}

playGame();
