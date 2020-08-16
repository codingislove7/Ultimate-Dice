// selectors
const button = document.querySelector("button")
const player = document.querySelector(".player")
const computer = document.querySelector(".computer")
const result = document.querySelector(".result")
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
        // check if player is the winner 
    } else if (rolls[0] > rolls[1]) {
        temp = 'You are the winner'
        // change the background color 
        color("player")
        // else computer is the winner 
    } else {
        temp = 'Computer is the winner'
      // change the background color 
      color("computer")
    }
    // result message 
    result.innerHTML = temp
    // player result 
    player.innerHTML = rolls[0]
    // computer result 
    computer.innerHTML = rolls[1]
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
function color(who){
    if (who === "draw"){
        computer.classList.remove("noWin" ,"win")
        player.classList.remove("noWin" ,"win")
        computer.classList.add("draw")
        player.classList.add("draw")
    }else if (who === "player"){
        computer.classList.remove("noWin" ,"win")
        player.classList.remove("noWin" ,"win")
        computer.classList.add("noWin")
        player.classList.add("win")
    }else{
        computer.classList.remove("noWin" ,"win")
        player.classList.remove("noWin" ,"win")
        computer.classList.add("win")
        player.classList.add("noWin")
    }
}