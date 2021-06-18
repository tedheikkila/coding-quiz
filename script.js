// js file for coding quiz, TWH, 6-15-21

// global selectors
var body = document.body
var link = document.querySelector(".highscores")
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
// var answer5 = document.querySelector(".answe5")
// var answer6 = document.querySelector(".answer6")
// var answer7 = document.querySelector(".answer7")
// var answer8 = document.querySelector(".answer8")
// var answer9 = document.querySelector(".answe9")
// var answer10 = document.querySelector(".answer10")
// var answer11 = document.querySelector(".answer11")
// var answer12 = document.querySelector(".answer12")
var nextButton = document.querySelector(".next-question")
var highScores = document.querySelector(".high-scores")
var clearScoresButton = document.querySelector(".clear-btn")
var goBackButton = document.querySelector(".back-btn")

// global vars
var timer;
var timerCount;

// quiz questions
const quizQuestions =   ["Commonly used data types DO NOT include: ", 
                        "The condition in an if/else statement is enclosed within ______.", 
                        "A very useful tool used during development and debugging for printing content to the debugger is: ", 
                        ]

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
    question.style.display = "block"
    scoreAnswer_1()
}

function styleAnswer_1() {
    answers.style.display = "block"
  
    answer1.setAttribute("style", "text-align: center; width:50%; margin-left:25%; margin-right:25%; margin-top:30px; padding:10px; background-color:thistle");
    answer2.setAttribute("style", "text-align: center; width:50%; margin-left:25%; margin-right:25%; margin-top:30px; padding:10px; background-color:thistle");
    answer3.setAttribute("style", "text-align: center; width:50%; margin-left:25%; margin-right:25%; margin-top:30px; padding:10px; background-color:thistle");
    answer4.setAttribute("style", "text-align: center; width:50%; margin-left:25%; margin-right:25%; margin-top:30px; padding:10px; background-color:thistle");

    scoreAnswer_1()

}

function scoreAnswer_1() {

    answer1.addEventListener("click", function() {
        if (answer1=true) {
        feedback.textContent = "Incorrect"
        score.textContent = "-3 seconds"
        timerCount -= 3
        }
        clearQuestion_1()
    });

    answer2.addEventListener("click", function() {
        if (answer2=true) {
        feedback.textContent = "Correct!"
        }
        clearQuestion_1()
    });
    answer3.addEventListener("click", function() {
        if (answer3=true) {
        feedback.textContent = "Incorrect"
        score.textContent = "-3 seconds"
        timerCount -= 3
        }
        clearQuestion_1()
    });
    answer4.addEventListener("click", function() {
        if (answer4=true) {
        feedback.textContent = "Incorrect"
        score.textContent = "-3 seconds"
        timerCount -= 3
        }
        clearQuestion_1()
    });

}

function clearQuestion_1() {

    question.style.display = "none"
    answers.style.display = "none"

    
    nextButton.setAttribute("style", "text-align: center; width:20%; margin-left:40%; margin-right:40%; margin-top:30px; padding:10px");
    nextButton.textContent = "Continue"
    
    nextButton.addEventListener("click", function() {

        feedback.textContent = ""
        score.textContent = ""
        nextButton.style.display = "none"

        question_2()
        answer_2()
        
    });
}

function question_2() {
    question.textContent = quizQuestions[1]
    styleQuestion_2()
}


function answer_2 () {
    answer1.textContent = question2Answers[0]
    answer2.textContent = question2Answers[1]
    answer3.textContent = question2Answers[2]
    answer4.textContent = question2Answers[3]
    styleAnswer_2()
}

function styleQuestion_2() {
    question.style.display = "block"
    scoreAnswer_2()
}

function styleAnswer_2() {
    answers.style.display = "block"
    
    answer1.setAttribute("style", "text-align: center; width:50%; margin-left:25%; margin-right:25%; margin-top:30px; padding:10px; background-color:thistle");
    answer2.setAttribute("style", "text-align: center; width:50%; margin-left:25%; margin-right:25%; margin-top:30px; padding:10px; background-color:thistle");
    answer3.setAttribute("style", "text-align: center; width:50%; margin-left:25%; margin-right:25%; margin-top:30px; padding:10px; background-color:thistle");
    answer4.setAttribute("style", "text-align: center; width:50%; margin-left:25%; margin-right:25%; margin-top:30px; padding:10px; background-color:thistle");

    scoreAnswer_2()

}

function scoreAnswer_2() {

    answer1.addEventListener("click", function() {
        if (answer1=true) {
        feedback.textContent = "Incorrect"
        score.textContent = "-3 seconds"
        timerCount -= 3
        console.log(score)
        }
        clearQuestion_2()
    });

    answer2.addEventListener("click", function() {
        if (answer2=true) {
        feedback.textContent = "Correct!"
        }
        clearQuestion_2()
    });
    answer3.addEventListener("click", function() {
        if (answer3=true) {
        feedback.textContent = "Incorrect"
        score.textContent = "-3 seconds"
        timerCount -= 3
        }
        clearQuestion_2()
    });
    answer4.addEventListener("click", function() {
        if (answer4=true) {
        feedback.textContent = "Incorrect"
        score.textContent = "-3 seconds"
        timerCount -= 3
        }
        clearQuestion_2()
    });
}

function clearQuestion_2() {

    question.style.display = "none"
    answers.style.display = "none"
    
    nextButton.setAttribute("style", "text-align: center; width:20%; margin-left:40%; margin-right:40%; margin-top:30px; padding:10px");
    nextButton.textContent = "Continue"
    
    nextButton.addEventListener("click", function() {
        
        feedback.textContent = ""
        score.textContent = ""
        nextButton.style.display = "none"

        answer_3()
        question_3()
    });
}


function question_3() {
    question.textContent = quizQuestions[2]
    styleQuestion_3()
}

function answer_3 () {
    answer1.textContent = question3Answers[0]
    answer2.textContent = question3Answers[1]
    answer3.textContent = question3Answers[2]
    answer4.textContent = question3Answers[3]
    styleAnswer_3()
}

function styleQuestion_3() {
    question.style.display = "block"
    scoreAnswer_3()
}


function styleAnswer_3() {
    answers.style.display = "block"

    answer1.setAttribute("style", "text-align: center; width:50%; margin-left:25%; margin-right:25%; margin-top:30px; padding:10px; background-color:thistle");
    answer2.setAttribute("style", "text-align: center; width:50%; margin-left:25%; margin-right:25%; margin-top:30px; padding:10px; background-color:thistle");
    answer3.setAttribute("style", "text-align: center; width:50%; margin-left:25%; margin-right:25%; margin-top:30px; padding:10px; background-color:thistle");
    answer4.setAttribute("style", "text-align: center; width:50%; margin-left:25%; margin-right:25%; margin-top:30px; padding:10px; background-color:thistle");

    scoreAnswer_3()

}


function scoreAnswer_3() {

    answer9.addEventListener("click", function() {
        if (answer1=true) {
        feedback.textContent = "Incorrect"
        score.textContent = "-3 seconds"
        timerCount -= 3
        }
        scoreForm()
    });

    answer10.addEventListener("click", function() {
        if (answer2=true) {
        feedback.textContent = "Correct!"
        }
        scoreForm()
    });
    answer11.addEventListener("click", function() {
        if (answer3=true) {
        feedback.textContent = "Incorrect"
        score.textContent = "-3 seconds"
        timerCount -= 3
        }
        scoreForm()
    });
    answer12.addEventListener("click", function() {
        if (answer4=true) {
        feedback.textContent = "Incorrect"
        score.textContent = "-3 seconds"
        timerCount -= 3
        }
        scoreForm()
    });
}


function scoreForm() {
    console.log(timerCount)
    
}

function startHighScores() {
    
    clearHighScores();
    goBack();
}

function clearHighScores () {
    
    clearScoresButton.addEventListener("click", function() {
    highScores.textContent = ""

    });
}

function goBack() {

    goBackButton.addEventListener("click", function(event) {
    console.log(event)
    });
}

// listens to "a" link click
link.addEventListener("click", startHighScores);

// listens to start button to call startGame function on click
startButton.addEventListener("click", startQuiz);


// couldn't get mouseout event to work in conjunction w/click events (scoring vs styling sequence)
// styles the answers with mouseover and mouseout events
//    answer1.addEventListener("mouseover", function() {
//         answer3.style.backgroundColor = "rgb(98, 248, 98)";
//    });
//    // styles the answers with mouseout events
//    answer1.addEventListener("mouseout", function() {
//         answer3.style.backgroundColor = "thistle";
//    });

