var start = document.getElementById("start");
var timerCount = document.querySelector("#clock");
var time = 60;
var questionIndex = 0;
var timerId;
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var answersEl = document.getElementById("answers")
var submitEl = document.getElementById("submit");
var initialsEl = document.getElementById("initials");

function begin() {
    console.log("here")
    // countDown()
    // questions()
    // answers()
  
}

function countDown() {
    
    
}

// function questions() {
//     var answerChoice;
//     var quest = [{
//         questions: "What does html stand for?",
//         answerChoice: ["World Wide Web", "hyperlink", "HyperText Markup Language", "Javascript"]}
//         // , "Which is not an accessible tag?", "Which language is used for styling?", "Which is an example of an array?", "You need a _______ link for a live site."]
// }

// function answers() {

// }

// function gameOver() {

// }

// function score() {

// }

// function saveScore() {

// }

start.addEventListener("click", begin)
console.log("begin")