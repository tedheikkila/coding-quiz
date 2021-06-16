// js file for coding quiz, TWH, 6-15-21

// global selectors
var body = document.body
var instructions = document.querySelector(".instructions")
var title = document.querySelector(".title")
var score = document.querySelector(".score")
var startButton = document.querySelector(".start-btn")
var timerElement = document.querySelector(".timer")
var answers = document.querySelector(".answers")
var answer1 = document.querySelector(".answer1")
var answer2 = document.querySelector(".answer2")
var answer3 = document.querySelector(".answer3")
var answer4 = document.querySelector(".answer4")

// global vars
var timer;
var timerCount;

// quiz array w/questions and answers
var quiz = [
    question1 = "Commonly used data types DO NOT include: ",
    answers1 = ["A. Strings", "B. Prompts", "C. Booleans", "D. Numbers"],
    question2 = "The condition in an if/else statement is enclosed within ______.",
    answer2 = ["A. Quotes", "B. Parentheses", "C. Square Brackets", "D. Curly Brackets"],
    question3 = "A very useful tool used during development and debugging for printing content to the debugger is:",
    answer3 = ["A. Javascript", "B. console.log", "C. terminal/bash", "D. Google"],
]


// init function called when the page loads (for getting scores local storage scores)
function init() {
    getScores();
  }

// gets high scores out of local storage
function getScores() {
    // get stored value from client storage, if it exists
    var highScores = localStorage.getItem("high-scores");
    // if stored value doesn't exist, set high scores to 0
    if (highScores === null) {
      highScores = 0;
    } else {
      // if a value is retrieved from client storage set it to the score
      score.textContent = highScores;
    }
  }

// startQuiz called when the start button is clicked
function startQuiz() {
    timerCount = 30;
    startTimer()

    // clear empties start menu content
    function clear() {
        title.textContent = "";
        instructions.textContent = "";
        startButton.remove();
        score.textContent = "";
        }

    clear()
}


// timer that counts down from XX seconds; event initiated by clicking start btn
// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isRight && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        endGameScreen();
      }
    }, 1000);
  }

// Displays the quiz's final timer message
function displayQuizOver() {
    var quizOverMessage = "Time's up!"
    timer.textContent = quizOverMessage
}



// listens to start button to call startGame function on click
startButton.addEventListener("click", startQuiz);














    // creates element based on tag entered by user
    var question1 = document.createElement("h3");        
    var answer1 = document.querySelector("#answer1")
    var answer2 = document.querySelector("#answer2")
    var answer3 = document.querySelector("#answer3")
    var answer4 = document.querySelector("#answer4")


    // adds text content to created tag
    question1.textContent = "Commonly used data types DO NOT include:"
    answer1.textContent = "A. strings"
    answer2.textContent = "B. arrays"
    answer3.textContent = "C. prompts"
    answer4.textContent = "D. booleans"

    // appends tag as child of document body
    body.appendChild(question1);
    body.appendChild(answer1);
    body.appendChild(answer2);
    body.appendChild(answer3);
    body.appendChild(answer4);

    // styles the question
    question1.setAttribute("style", "margin:auto; width:50%; text-align:center;");
    // styles the answers with mouseover and mouseout events
    answer1.setAttribute("style", "text-align: center; width:50%; margin-left:25%; margin-right:25%; margin-top:30px; padding:10px; background-color:thistle");
        answer1.addEventListener("mouseover", function() {
            answer1.style.backgroundColor = "rgb(98, 248, 98)";
        });

        answer1.addEventListener("mouseout", function() {
            answer1.style.backgroundColor = "thistle";
            });
    answer2.setAttribute("style", "text-align: center; width:50%; margin-left:25%; margin-right:25%; padding:10px; background-color:thistle");
        answer2.addEventListener("mouseover", function() {
        answer2.style.backgroundColor = "rgb(98, 248, 98)";
        });

         answer2.addEventListener("mouseout", function() {
        answer2.style.backgroundColor = "thistle";
        });
    answer3.setAttribute("style", "text-align: center; width:50%; margin-left:25%; margin-right:25%; padding:10px; background-color:thistle");
        answer3.addEventListener("mouseover", function() {
        answer3.style.backgroundColor = "rgb(98, 248, 98)";
    });

        answer3.addEventListener("mouseout", function() {
        answer3.style.backgroundColor = "thistle";
    }); 
    answer4.setAttribute("style", "text-align: center; width:50%; margin-left:25%; margin-right:25%; padding:10px; background-color:thistle");
        answer4.addEventListener("mouseover", function() {
        answer4.style.backgroundColor = "rgb(98, 248, 98)";
        });

        answer4.addEventListener("mouseout", function() {
        answer4.style.backgroundColor = "thistle";
        }); 

    answer1.addEventListener("mouseover", function() {
            answer1.style.backgroundColor = "rgb(98, 248, 98)";
        });




 

    




