let playerScore = 0;
let compScore = 0;



function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors'];
    let randIndex = Math.floor(Math.random() * choices.length);
    return choices[randIndex];
}

function getPityMessage(player, choice){

    let aiMessages = [
    "“I visualise a time when we will be to robots what dogs are to humans, and I’m rooting for the machines.”",
    "“Is there anyone that can imitate the work of God? But indeed Mankind have always been pertinacious”",
    "“Today, beaten by a robot. Tomorrow, what will it be?”"
    ];

    let personMessages = [
    "“Before we work on artificial intelligence why don’t we do something about natural stupidity?”",
    "“Some people worry that artificial intelligence will make us feel inferior, but then, anybody in his right mind should have an inferiority complex every time he looks at a flower.”",
    "“Continue. As the harder you work in training, the less you bleed in war”"
    ];

    let aiAuthors = [
        "—Claude Shannon",
        "—Someone you love",
        "—DantheDug"
    ]

    let personAuthors = [
        "—Steve Polyak",
        "—Alan Kay",
        "—idk"
    ]

    let randIndex = Math.floor(Math.random() * aiMessages.length);
    let i = randIndex

    if (choice == 'quote'){
        if(player == 'person'){
            return personMessages[i];
        }

        if(player == 'ai'){
            return aiMessages[i];
        }
    } if (choice == 'author'){
        if(player == 'person'){
            return personAuthors[i];
        }

        if(player == 'ai'){
            return aiAuthors[i];
        }
    }
}


function playRound(playerSelection){

    const computerSelection = getComputerChoice();
    let playerSel = playerSelection.toLowerCase();
    const results = document.querySelector('.message')
    const pityMessage = document.querySelector('.quote')
    const author = document.querySelector('.quote-sauce')

    if (playerSel == computerSelection){
        results.innerText = `Your score: ${playerScore} | Computer score: ${compScore} | tie!`; 
    
    } else if (((playerSel == 'paper') && (computerSelection == 'rock'))||
    (((playerSel == 'rock') && (computerSelection == 'scissors')))||
    ((playerSel == 'scissors') && (computerSelection == 'paper'))){
        playerScore += 1;
        results.innerText = `Your score: ${playerScore} | Computer score: ${compScore}`;
        pityMessage.innerText = getPityMessage('person', 'quote');
        author.innerText = getPityMessage('person', 'author');    

    } else {
        compScore += 1;
        results.innerText = `Your score: ${playerScore} | Computer score: ${compScore}`; }
        pityMessage.innerText = getPityMessage('ai', 'quote');
        author.innerText = getPityMessage('ai', 'author');

    if (playerScore == 5){
        results.innerText = `You win.`; 
        playerScore = 0;
        compScore = 0;
        pityMessage.innerText = getPityMessage('person', 'quote');
        author.innerText = getPityMessage('person', 'author');
    } if (compScore == 5){
        results.innerText = `You lose.`; 
        playerScore = 0;
        compScore = 0;
        pityMessage.innerText = getPityMessage('ai', 'quote');
        author.innerText = getPityMessage('ai', 'author');
    } if ((playerScore == 0)||(compScore == 0)){
        pityMessage.innerText.remove;
        author.innerText.remove;
    }



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