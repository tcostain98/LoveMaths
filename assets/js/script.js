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


function runGame() {

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