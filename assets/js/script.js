var startEl = document.getElementById("start");
var timerCount = document.querySelector("#clock");
var time = 60;
console.log(typeof time)
var questionIndex = 0;
var timerId;
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var answersEl = document.getElementById("answers")
var submitEl = document.getElementById("submit");
var initialsEl = document.getElementById("initials");
var beginEl = document.getElementById("begin");

function begin() {
    // hide start
    beginEl.style.display = "none";
    // unhide qs
    questionsEl.style.display = "block";
    // unhide clock
    timerCount.style.display = "block";
    // start timer
    timerId = setInterval(countDown, 1000);
    // timerEl.textContent = "60";
    // set text content fron 0 to 60
    // get a questiotep n
    // getQuestion()

    countDown()
    // questions()
    // answers()
  
}

function countDown() {
    // var timerId = setInterval(function() {
        time--;
    timerEl.textContent = time;
    if (time === 0) {
        clearInterval(timerId);
        gameOver();
    }
    // decrement time by 1; time--
    // reset text content (timerEl.textcontent = time)
    // if time<= 0 = execute gameOver function
}


function getQuestion() {
    var currentQ = questionsEl[questionIndex].questions;
    // var currentQ = questions[questionIndex];

    var TitleEl = document.getElementById("questionTitle");
    TitleEl.textContent = currentQ.title;
    questionsEl.append(currentQ);
    // clear answersEl.innerhtml = "" to reset
    // answersEl.innerhtml = "";
    // for loop to loop over choices and creates button for each....append to answersEl
    for (var i = 0; i < questions.length; i++) {
        ;
    }
}

function userChoice() {
    // 
}

function gameOver() {

}

// function score() {

// }

// function saveScore() {

// }

startEl.addEventListener("click", begin)
