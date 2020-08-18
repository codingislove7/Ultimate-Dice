// selectors
const button = document.querySelector(".roll")
const player = document.querySelector(".player")
const computer = document.querySelector(".computer")
const result = document.querySelector(".result")
const computerSum = document.querySelector(".computerSum")
const playerSum = document.querySelector(".playerSum")
const computerHistory = document.querySelector(".computerHistory")
const playerHistory = document.querySelector(".playerHistory")

// sore sum of results
const sum = {
    computerSum: 0,
    playerSum: 0
}
// event listener on roll click
button.addEventListener("click", () => {
    // rolls
    const rolls = [roll(6), roll(6)]
    // place holder to store the output message 
    let temp;
    // check if the result is equal
    if (rolls[0] == rolls[1]) {
        temp = 'it was Draw '
        // change the background color 
        color("draw")
        // update history
        history(rolls)
        // check if player is the winner 
    } else if (rolls[0] > rolls[1]) {
        temp = 'You are the winner'
        // change the background color 
        color("player")
        // update sum results 
        sum.playerSum += 1
        // update history
        history(rolls)
        // else computer is the winner 

    } else {
        temp = 'Computer is the winner'
        // change the background color 
        color("computer")
        // update sum results 
        sum.computerSum += 1
        // update history
        history(rolls)
    }
    // result message 
    result.innerHTML = temp
    // player result 
    player.innerHTML = rolls[0]
    // computer result 
    computer.innerHTML = rolls[1]
    // update sum results
    computerSum.innerText = sum.computerSum
    playerSum.innerText = sum.playerSum
})


// roll a random number 
function roll(num) {
    // generate a random number 
    const rNumber = Math.floor(Math.random() * num + 1)
    // generate dice icon code for the random number 
    const n = 9855 + rNumber
    // add characters to the dice icon code to use in html 
    const char = "&#" + n
    // return the icon 
    return char
}
// update color
function color(who) {
    if (who === "draw") {
        computer.classList.remove("noWin", "win")
        player.classList.remove("noWin", "win")
        computer.classList.add("draw")
        player.classList.add("draw")
    } else if (who === "player") {
        computer.classList.remove("noWin", "win")
        player.classList.remove("noWin", "win")
        computer.classList.add("noWin")
        player.classList.add("win")
    } else {
        computer.classList.remove("noWin", "win")
        player.classList.remove("noWin", "win")
        computer.classList.add("win")
        player.classList.add("noWin")
    }
}
// update history
function history(rolls) {
    const cli = document.createElement("cli")
    const pli = document.createElement("pli")
    cli.innerHTML = rolls[1]
    pli.innerHTML = rolls[0]
    computerHistory.insertBefore(cli, computerHistory.childNodes[0]);
    playerHistory.insertBefore(pli, playerHistory.childNodes[0]);
}