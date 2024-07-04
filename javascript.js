let choices = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const outcome = document.querySelector('.outcome');

rock.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const humanChoice = 'rock';
    playRound(humanChoice,computerChoice);
    playGame(humanScore,computerScore)
})

paper.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const humanChoice = 'paper';
    playRound(humanChoice,computerChoice);
    playGame(humanScore,computerScore)
})

scissors.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const humanChoice = 'scissors';
    playRound(humanChoice,computerChoice);
    playGame(humanScore,computerScore)
})

function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}

// function getHumanChoice(){
//     let validate = false
//     while (validate == false){
//         let person = prompt("rock, paper or scissors? " );
//         if (person == null){
//             continue;
//         }
//         person = person.toLowerCase();
//         if (choices.includes(person)) {
//             validate = true;
//             return person;
//         }
//     }
// }

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
    const p = document.createElement('p');
    if (result == 'Tie'){
        p.textContent = 'Tie';
    }
    else if (result == 'Win'){
        humanScore++;
        p.innerHTML = `<p>You win! ${humanChoice} beats ${computerChoice}</p>`;
    }
    else {
        computerScore++;
        p.innerHTML =` <p>You lose! ${computerChoice} beats ${humanChoice}</p>`;
    }
    outcome.appendChild(p);
}

function playGame(humanScore,computerScore){
    const h2 = document.createElement('h2')
    if (humanScore === 5 || computerScore === 5){
        if (humanScore > computerScore){
            h2.textContent = 'You are the winner!';
        }
        else if (humanScore < computerScore){
            h2.textContent = 'Computer wins :(';
        }
        else{
             h2.textContent = "It's a tie";
        }
    }
    outcome.appendChild(h2);
};


