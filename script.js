function getComputerChoice(){
    let randomInt = Math.floor(Math.random() * 3)
    if (randomInt == 0){
        return("ROCK")
    } else if (randomInt == 1) {
        return("PAPER")
    } else if (randomInt == 2){
        return("SCISSORS")
    }
}


function playRound(player, computerSelection){
    let playerSelection = player.toUpperCase()
    if (playerSelection == computerSelection){
        return("Tie")
    } else if (playerSelection == "ROCK" && computerSelection == "PAPER" || playerSelection == "PAPER" && computerSelection == "SCISSORS" || playerSelection == "SCISSORS" && computerSelection == "ROCK"){
        return("You lost")
    } else{
        return("You win")
    }
}

let playerPoints = 0
let computerPoints = 0

for (let i = 0; i < 5;){
    let playerWeapon = prompt("Choose your weapon: ", "rock")
    let computerWeapon = getComputerChoice()
    console.log("Your weapon is " + playerWeapon)
    console.log("Computers weapon is " + computerWeapon)
    let match = (playRound(playerWeapon, computerWeapon))
    console.log(match)
    if (match == "You lost"){
        computerPoints ++
        i ++
    } else if (match == "You win") {
        playerPoints ++
        i ++
    }
}

console.log("You got " + playerPoints + " points")
console.log("The computer got " + computerPoints + " points")

if (playerPoints > computerPoints){
    alert("You won!")
} else{
    alert("You lost :(")
}
