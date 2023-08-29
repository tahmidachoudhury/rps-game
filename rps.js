let playerScore = 0;
let compScore = 0;



function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors'];
    let randIndex = Math.floor(Math.random() * choices.length);
    return choices[randIndex];
}


function playRound(playerSelection){

    const computerSelection = getComputerChoice();
    let playerSel = playerSelection.toLowerCase();

    if (playerSel == computerSelection){
        console.log('tie!');
    
    } else if (((playerSel == 'paper') && (computerSelection == 'rock'))||
    (((playerSel == 'rock') && (computerSelection == 'scissors')))||
    ((playerSel == 'scissors') && (computerSelection == 'paper'))){
        playerScore += 1;
        console.log(`you picked ${playerSel}! computer picked ${computerSelection}!
you win! your score is ${playerScore} out of 3`);       

    } else {
        compScore += 1;
        console.log(`you picked ${playerSel}! computer picked ${computerSelection}! 
you lose! computer's score is ${compScore} out of 3`);}


    const rockAIButton = document.querySelector('.AI.rock');
    const paperAIButton = document.querySelector('.AI.paper');
    const scissorsAIButton = document.querySelector('.AI.scissors');

    if (computerSelection == 'rock'){rockAIButton.classList.add('transition')}
    if (computerSelection == 'scissors'){scissorsAIButton.classList.add('transition')}
    if (computerSelection == 'paper'){paperAIButton.classList.add('transition')}
}


const rockButton = document.querySelector('.player.rock');
rockButton.addEventListener('click', () => {
    playRound('rock')
    rockButton.classList.add('transition')
});


const paperButton = document.querySelector('.player.paper');
paperButton.addEventListener('click', () => {
    playRound('paper')
    paperButton.classList.add('transition')
});

const scissorsButton = document.querySelector('.player.scissors');
scissorsButton.addEventListener('click', () => {
    playRound('scissors')
    scissorsButton.classList.add('transition')
});

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('transition');

}

options = document.querySelectorAll('.player, .AI');
options.forEach(option => option.addEventListener('transitionend', removeTransition));




//        function game(){
//            roundStarter(true)
//            roundStarter(true)
//            roundStarter(true)
//            roundStarter(true)
//            roundStarter()
//        }

function roundStarter(finish){
    let playerSelection = String(prompt("pick either 'rock', 'paper' or 'scissors'"));
        if (playerSelection == "null"){
            playerSelection = "nothing";}

    playRound(playerSelection, computerSelection);

    if (finish == null || finish == false){
        if (compScore > playerScore) {
        console.log(`That's the end! i beat you with the final score:
you: ${playerScore}
me: ${compScore}`)
        } else if (playerScore > compScore){
        console.log(`That's the end! you beat me with the final score:
you: ${playerScore}
me: ${compScore}`)
        } else{
        console.log(`tie! 
me: ${compScore}
you: ${playerScore}
press control+r RIGHT NOW!`)
        }
    }
}
