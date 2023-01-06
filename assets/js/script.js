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
    // hide start
    // unhide qs
    // unhide clock
    // start timer
    // timerId = setinterval(countDown, 1000)
    // set text content fron 0 to 60
    // get a question

    // countDown()
    // questions()
    // answers()
  
}

function countDown() {
    // decrement time by 1; time--
    // reset text content (timerEl.textcontent = time)
    // if time<= 0 = execute gameOver function
    
}


function getQuestion() {
    var currentQ = questions[questionIndex]
    // create var TitleEl= document.getElementById("questionTitle")
    // TitleEl.textcontent= currentQuestion.Title
    // clear answersEl.innerhtml = "" to reset
    // for loop to loop over choices and creates button for each....append to answersEl
}

function userChoice() {
    // 
}

// function gameOver() {

// }

// function score() {

// }

// function saveScore() {

// }

start.addEventListener("click", begin)
console.log("begin")