let playerScore = 0;
let compScore = 0;

game();




function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors'];
    let randIndex = Math.floor(Math.random() * choices.length);
    return choices[randIndex];
}


function playRound(playerSelection, computerSelection){

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
}





function roundStarter(finish){
    let playerSelection = String(prompt("pick either 'rock', 'paper' or 'scissors'"));
        if (playerSelection == "null"){
            playerSelection = "nothing";}
    const computerSelection = getComputerChoice();

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





//        function game(){
//            roundStarter(true)
//            roundStarter(true)
//            roundStarter(true)
//            roundStarter(true)
//            roundStarter()
//        }

