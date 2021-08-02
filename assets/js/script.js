//wait for DOM to finish before running the game//
//Get the button elements and add event listners to them//

document.addEventListener("DOMContentLoaded", function() {
let buttons = document.getElementsByTagName("button");

for (let button of buttons){
button.addEventListener("click", function() {
if (this.getAttribute("data-type") === "submit") {
    alert("You Clicked Submit!");
} else{
    let gameType = this.getAttribute("data-type");
    alert(`You Clicked ${gameType}`);
}
})
}

})  

/**
 * The main game 'loop', called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame() {
//creates 2 random numbers betweel 1 and 25 //

let num1 = Math.floor(Math.random()* 25) + 1; 
let num2 = Math.floor(Math.random()* 25) + 1;
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}