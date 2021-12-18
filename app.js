window.addEventListener('DOMContentLoaded', () => {
    let modal = document.querySelector('.modal')
let result = document.querySelector('#result')
let restart = document.querySelector('.restart-btn')
let score = document.querySelector('#score')
let choices = document.querySelectorAll('.choice')


let scoreBoard = {
    player: 0,
    computer: 0,
    draw: 0
}

function play(event){
    restart.style.display = 'inline-block'
    let playerChoice = event.target.id
    let computerChoice = getComputerChoice()
    let winner = getWinner(playerChoice , computerChoice)
    showWinner(winner, computerChoice)
}

function getComputerChoice() {
    let random = parseInt(Math.random()*100)
    if(random <= 33){
        return 'rock' 
    } else if (random <=66){
        return 'paper'
    } else {
        return 'scissors' 
    }
}

function getWinner(p,c){
    if (p===c){
        return 'draw'
    } else if(p=== 'rock'){
        if(c=== 'paper'){
            return 'computer'
        } else {
            return 'player'
        }
    } else if(p === 'paper'){
        if (c === 'scissors'){
            return 'computer'
        } else {
            return 'player'
        }
    } else if(p === 'scissors'){
        if(c === 'rock'){
            return 'computer'
        } else {
            return 'player'
        }
    }        
}

function showWinner(winner, computerChoice){
    if(winner === 'player'){
        scoreBoard.player++ 
        result.innerHTML = `
            <h1 class='text-win'>You win</h1>
            <i class='fas fa-hand-${computerChoice} fa-10x'></i>
            <p> Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
        ` 
    } else if (winner === 'computer'){
        scoreBoard.computer++
        result.innerHTML = `
            <h1 class='text-lose'>You Lose</h1>
            <i class='fas fa-hand-${computerChoice} fa-10x'></i>
            <p> Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
        `
    } else {
        scoreBoard.draw++
        result.innerHTML = `
            <h1 class='text-draw'>It's A Draw</h1>
            <i class='fas fa-hand-${computerChoice} fa-10x'></i>
            <p> Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
        `
    }
    score.innerHTML = `
        <p> Player: ${scoreBoard.player} </p>
        <p> Draw: ${scoreBoard.draw} </p>
        <p> Computer: ${scoreBoard.computer} </p>
    `
    modal.style.display = 'block'
}

function restartGame(){
    scoreBoard.player = 0
    scoreBoard.draw = 0
    scoreBoard.computer = 0
    score.innerHTML = `
        <p> Player: ${scoreBoard.player} </p>
        <p> Draw: ${scoreBoard.draw} </p>
        <p> Computer: ${scoreBoard.computer} </p>
    `
}

function clearModal (event){
    if(event.target == modal){
        modal.style.display = 'none'
    }
}


choices.forEach(choice => choice.addEventListener('click', play))
window.addEventListener('click', clearModal)
restart.addEventListener('click', restartGame)
})


