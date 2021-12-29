const playerScoreEl=document.getElementById('playerScore')
const computerScoreEl=document.getElementById('computerScore')
const playerChoiceEl=document.getElementById('playerChoice')
const computerChoiceEl=document.getElementById('computerChoice')
const resultText=document.getElementById('resultText')
const playerRock=document.getElementById('playerRock')
const playerPaper=document.getElementById('playerPaper')
const playerScissors=document.getElementById('playerScissors')
const playerLizard=document.getElementById('playerLizard')
const playerSpock=document.getElementById('playerSpock')
const computerRock=document.getElementById('computerRock')
const computerPaper=document.getElementById('computerPaper')
const computerScissors=document.getElementById('computerScissors')
const computerLizard=document.getElementById('computerLizard')
const computerSpock=document.getElementById('computerSpock')
const allGameIcons=document.querySelectorAll('.far')

// CHOICES
const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};
let computerChoice=''
let playerScoreNumber=0
let computerScoreNumber=0

// RESET ALL SELECTED ICONS
function resetSelected(){
allGameIcons.forEach((icon)=>{
icon.classList.remove('selected')
})
}

// RESET SCORE & PLAYER CHOICE/ COMPUTER CHOICE
 function resetAll(){
 playerScoreNumber=0
 computerScoreNumber=0
 playerScoreEl.textContent=playerScoreNumber
 computerScoreEl.textContent=computerScoreNumber
 playerChoiceEl.textContent=''
 computerChoiceEl.textContent=''
 resultText.textContent=''
 resetSelected()
 }
// RANDOM COMPUTER CHOICE
function computerRandomChoice(){
  const computerChoiceNumber=Math.random()
if(computerChoiceNumber<0.2){
  computerChoice='rock'
}else if(computerChoiceNumber<=0.4){
  computerChoice='paper'
}else if(computerChoiceNumber<=0.6){
  computerChoice='scissors'
}else if(computerChoiceNumber <= 0.8){
  computerChoice='lizard'
}else{
  computerChoice='spock'
}

}

// ADD SELECTED STYLING AND COMPUTER CHOICE
function displayComputerChoice(){
  // Add 'selected styling & player choice
  switch(computerChoice){
    case 'rock':
      computerRock.classList.add('selected')
      computerChoiceEl.textContent= '--- Rock'
      break
    case 'paper':
      computerPaper.classList.add('selected')
      computerChoiceEl.textContent= '--- Paper'
      break
    case 'scissors':
      computerScissors.classList.add('selected')
      computerChoiceEl.textContent= '--- Scissors'
      break
    case 'lizard':
      computerLizard.classList.add('selected')
      computerChoiceEl.textContent= '--- Lizard'
      break
    case 'spock':
      computerSpock.classList.add('selected')
      computerChoiceEl.textContent= '--- Spock'
      break
      default:
        break
  }
}

// CHECK RESULTS, INCREASE SCORES AND UPDATE RESULTS
function updateScore(playerChoice){
if(playerChoice===computerChoice){
  resultText.textContent=" It's a tie"
}else{
  const choice=choices[playerChoice]
  if(choice.defeats.indexOf(computerChoice)>-1){
    resultText.textContent='You Won!'
    playerScoreNumber++
    playerScoreEl.textContent=playerScoreNumber
  }else{
    resultText.textContent='You Lost!'
    computerScoreNumber++
    computerScoreEl.textContent=computerScoreNumber
  }
}

}
// CALL FUNCTIONS TO PROCESS TURN
function checkResults(playerChoice){
  resetSelected()
  computerRandomChoice()
  displayComputerChoice()
  updateScore(playerChoice)
}
// PASSING PLAYER SELECTION VALUE
function select(playerChoice){
  // reseting each time a new selection is made
 checkResults(playerChoice)
  // Add 'selected styling & player choice
  switch(playerChoice){
    case 'rock':
      playerRock.classList.add('selected')
      playerChoiceEl.textContent= '--- Rock'
      break
    case 'paper':
      playerPaper.classList.add('selected')
      playerChoiceEl.textContent= '--- Paper'
      break
    case 'scissors':
      playerScissors.classList.add('selected')
      playerChoiceEl.textContent= '--- Scissors'
      break
    case 'lizard':
      playerLizard.classList.add('selected')
      playerChoiceEl.textContent= '--- Lizard'
      break
    case 'spock':
      playerSpock.classList.add('selected')
      playerChoiceEl.textContent= '--- Spock'
      break
      default:
        break
  }
}


// STARTUP SET INITAIL VALUES
resetAll()