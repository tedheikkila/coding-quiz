// js file for coding quiz, TWH, 6-15-21

// global selectors
var body = document.body
var instructions = document.querySelector(".instructions")
var title = document.querySelector(".title")
var score = document.querySelector(".score")
var feedback = document.querySelector(".feedback")
var startButton = document.querySelector(".start-btn")
var timerElement = document.querySelector(".timer")
var question = document.querySelector(".question")
var answers = document.querySelector(".answers")
var answer1 = document.querySelector(".answer1")
var answer2 = document.querySelector(".answer2")
var answer3 = document.querySelector(".answer3")
var answer4 = document.querySelector(".answer4")
var nextButton = document.querySelector(".next-question")

// global vars
var timer;
var timerCount;

// quiz questions
const quizQuestions = ["Commonly used data types DO NOT include: ", 
                        "The condition in an if/else statement is enclosed within ______.", 
                        "A very useful tool used during development and debugging for printing content to the debugger is: ", ]

// answers for question 1, 2, and 3
const question1Answers = ["A. Strings", "B. Prompts", "C. Booleans", "D. Numbers",] 
const question2Answers = ["A. Quotes", "B. Parentheses", "C. Square Brackets", "D. Curly Brackets",]
const question3Answers = [ "A. Javascript", "B. console.log", "C. terminal/bash", "D. Google",]

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
    clearStart()
    question_1()
    answer_1()
}


// clear empties start menu content and subsequent questions
function clearStart() {
    title.textContent = "";
    instructions.textContent = "";
    startButton.remove();
    score.textContent = "";
    feedback.textContent = "";
}

function clearQuestion_1() {
    answers.remove()
    question.remove()

    nextButton.setAttribute("style", "text-align: center; width:20%; margin-left:40%; margin-right:40%; margin-top:30px; padding:10px");
    nextButton.textContent = "Continue"

    nextButton.addEventListener("click", function() {
        question_2()
        answer_2()
    });

}


// timer that counts down from 30 seconds; event initiated by clicking start btn
function startTimer() {      
    // setInterval calls function to be executed every 1 second
    var timeInterval = setInterval(function () {
        // when timerCount is greater than 1
        if (timerCount > 1) {
        // set the textContent` of timerElement to show the remaining seconds
        timerElement.textContent = timerCount + ' seconds remaining';
        // Decrement timerCount by 1
        timerCount--;
        } else if (timerCount === 1) {
        // when timerCount is equal to 1, rename to 'second' instead of 'seconds'
        timerElement.textContent = timerCount + ' second remaining';
        timerCount--;
        } else {
        // once timerCount gets to 0, set timeCount to an empty string
        timerElement.textContent = '';
        // clearInterval stops the timer
        clearInterval(timeInterval);
        // call displayQuizOver function
        displayQuizOver();
        }
    }, 1000);
}

// Displays the quiz's final timer message
function displayQuizOver() {
    var quizOverMessage = "Time's up!"
    timerElement.textContent = quizOverMessage
}

// function populates the next question (1, 2, 3, etc)
function question_1() {
    question.textContent = quizQuestions[0]

    styleQuestion_1()
}

function answer_1 () {
    answer1.textContent = question1Answers[0]
    answer2.textContent = question1Answers[1]
    answer3.textContent = question1Answers[2]
    answer4.textContent = question1Answers[3]

    styleAnswer_1()
}

function styleQuestion_1() {

    scoreAnswer_1()
}

function styleAnswer_1() {
    // styles answer1
    answer1.style.display = "visible"
    answer1.setAttribute("style", "text-align: center; width:50%; margin-left:25%; margin-right:25%; margin-top:30px; padding:10px; background-color:thistle");
    // styles the answers with mouseover events
    answer1.addEventListener("mouseover", function() {
        answer1.style.backgroundColor = "rgb(98, 248, 98)";
    });
    // styles the answers with mouseout events
    answer1.addEventListener("mouseout", function() {
        answer1.style.backgroundColor = "thistle";
    });
 
    //styles answer2
    answer2.style.display = "visible"
    answer2.setAttribute("style", "text-align: center; width:50%; margin-left:25%; margin-right:25%; margin-top:30px; padding:10px; background-color:thistle");
    // styles the answers with mouseover events
    answer2.addEventListener("mouseover", function() {
        answer2.style.backgroundColor = "rgb(98, 248, 98)";
    });
    // styles the answers with mouseout events
    answer2.addEventListener("mouseout", function() {
        answer2.style.backgroundColor = "thistle";
    });
 
   //styles answer3
   answer3.style.display = "visible"
   answer3.setAttribute("style", "text-align: center; width:50%; margin-left:25%; margin-right:25%; margin-top:30px; padding:10px; background-color:thistle");
   // styles the answers with mouseover events
   answer3.addEventListener("mouseover", function() {
        answer3.style.backgroundColor = "rgb(98, 248, 98)";
   });
   // styles the answers with mouseout events
   answer3.addEventListener("mouseout", function() {
        answer3.style.backgroundColor = "thistle";
   });
 
  //styles answer4
  answer4.style.display = "visible"
  answer4.setAttribute("style", "text-align: center; width:50%; margin-left:25%; margin-right:25%; margin-top:30px; padding:10px; background-color:thistle");
  // styles the answers with mouseover events
  answer4.addEventListener("mouseover", function() {
       answer4.style.backgroundColor = "rgb(98, 248, 98)";
  });
  // styles the answers with mouseout events
  answer4.addEventListener("mouseout", function() {
       answer4.style.backgroundColor = "thistle";
  });
 
  scoreAnswer_1()

}

function scoreAnswer_1() {

    answer1.addEventListener("click", function() {
        if (answer1=true) {
        feedback.textContent = "Incorrect!"
        score.textContent = "-5 points"
        timerCount -= 5
        score -= 5
        console.log(score)
        }
        clearQuestion_1()
    });

    answer2.addEventListener("click", function() {
        if (answer2=true) {
        feedback.textContent = "Correct!"
        score.textContent = "+10 points"
        score += 10
        //no timer deduction necessary
        }
        clearQuestion_1()
    });
    answer3.addEventListener("click", function() {
        if (answer3=true) {
        feedback.textContent = "Incorrect!"
        score.textContent = "-5 points"
        timerCount -= 5
        score -=5
        }
        clearQuestion_1()
    });
    answer4.addEventListener("click", function() {
        if (answer4=true) {
        feedback.textContent = "Incorrect!"
        score.textContent = "-5 points"
        timerCount -=5
        score -=5
        }
        clearQuestion_1()
    });
}












// listens to start button to call startGame function on click
startButton.addEventListener("click", startQuiz);
