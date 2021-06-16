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
var quiz = []


// The init function is called when the page loads 
function init() {
    getScores();
  }

// This functions is used by init
function getScores() {
    // Get stored value from client storage, if it exists
    var highScores = localStorage.getItem("winCount");
    // If stored value doesn't exist, set counter to 0
    if (highScores === null) {
      highScores = 0;
    } else {
      // If a value is retrieved from client storage set the winCounter to that value
      winCounter = storedWins;
    }
    //Render win count to page
    win.textContent = winCounter;
  }

// The startGame function is called when the start button is clicked
function startQuiz() {
    timeLeft = 30;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    startTimer()
  }






// timer that counts down from XX seconds; event initiated by clicking start btn
function countdown() {
    var timeLeft = 30;

    // uses the `setInterval()` method to call a function to be executed every 1 second
    var timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
            // set the `textContent` of `timeLeft` to show the remaining seconds
            timer.textContent = timeLeft + ' seconds remaining';
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else if (timeLeft === 1) {
            // when `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            timer.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            // once `timeLeft` gets to 0, set `timer` to an empty string
            timer.textContent = "";
            // use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            // Call the `displayMessage()` function
            displayQuizOver();
        }
        // ticks every 1 second
        }, 1000);
        }
        // Displays the quiz's final timer message
        function displayQuizOver() {
            var quizOverMessage = "Time's up!"
            timer.textContent = quizOverMessage
        }

        console.log(timer)

    countdown()
 

// empties the start menu; readies for question 1 and the array of objects filled w/questions
startBtn.addEventListener("click", function start () {
    function clear() {
    title.textContent = "";
    instructions.textContent = "";
    startBtn.remove();
    score.textContent = "";
    }

    clear()

});

// starts the quiz with each question as an object that is iterated until all questions are asked
// question 1
startBtn.addEventListener("click", function start() {

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

    // create listen events for clicks and run if statements for right or wrong selection
    answer1.addEventListener("click", function() {
       score = score - 5;
       timeLeft = timeLeft - 5;
       countdown(timeLeft);
    });

});

// Attach event listener to start button to call startGame function on click
startBtn.addEventListener("click", startQuiz);


