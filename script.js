// js file for coding quiz, TWH, 6-15-21

// global variables declared for specific selectors
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
var nextButton = document.querySelector(".next-question")
var finalScore = document.querySelector(".final-score")
var endQuiz = document.querySelector(".end-quiz")
var submitButton = document.querySelector(".submit-score")
var highScores = document.querySelector(".high-scores")
var clearScoresButton = document.querySelector(".clear-btn")
var goBackButton = document.querySelector(".back-btn")
var score_1 = document.querySelector("#score-1")
var initials = document.querySelector("#initials")
var scoreScreen = document.querySelector(".scores-screen")

// global vars listed
var timer;
var timerCount;

// quiz questions set as const 
const quizQuestions =   ["Commonly used data types DO NOT include: ", 
                        "The condition in an if/else statement is enclosed within ______.", 
                        "A very useful tool used during development and debugging for printing content to the debugger is: ", 
                        ]

// answers for question 1, 2, and 3 set as const
const question1Answers = ["A. Strings", "B. Prompts", "C. Booleans", "D. Numbers",] 
const question2Answers = ["A. Quotes", "B. Parentheses", "C. Square Brackets", "D. Curly Brackets",]
const question3Answers = [ "A. Javascript", "B. console.log", "C. terminal/bash", "D. Google",]

// init function called when the page loads (for getting scores from local storage)
function init() {
    getScores();
  }

// gets high scores out of local storage
function getScores() {
    // gets stored value from storage, if it exists
    var highScores = JSON.parse(localStorage.getItem("TWH"));

    // if stored value doesn't exist, sets high scores to 0
    if (highScores === null) {
      highScores = 0;
    } else {
      // if a value is retrieved from storage set it to the score
      score_1.textContent = highScore;
    }
  }

// startQuiz called when the start button is clicked
function startQuiz() {
    timerCount = 60;
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

// timer counts down from 60 seconds; event initiated by clicking start btn
function startTimer() {      
    // setInterval calls function to be executed every 1 second
    var timeInterval = setInterval(function () {
        // when timerCount is greater than 1
        if (timerCount > 1) {
        // set the textContent of timerElement to show the remaining seconds
        timerElement.textContent = timerCount + ' seconds remaining';
        // decrease timerCount by 1
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

// displays the quiz's final timer message
function displayQuizOver() {
    var quizOverMessage = "Time's up!"
    timerElement.textContent = quizOverMessage
    if (quizOverMessage = "Time's up!") {
        scoreForm()
    }
}

// loads question 1
function question_1() {
    question.textContent = quizQuestions[0]
    styleQuestion_1()
}

// loads answers from question 1
function answer_1 () {
    answer1.textContent = question1Answers[0]
    answer2.textContent = question1Answers[1]
    answer3.textContent = question1Answers[2]
    answer4.textContent = question1Answers[3]
    styleAnswer_1()
}

// styles question 1
function styleQuestion_1() {
    question.style.display = "block"
    scoreAnswer_1()
}

// styles answer 1
function styleAnswer_1() {
    answers.style.display = "block"

    answer1.setAttribute("style", "text-align: center; width:50%; margin-left:25%; margin-right:25%; margin-top:30px; padding:10px; background-color:thistle");
    answer2.setAttribute("style", "text-align: center; width:50%; margin-left:25%; margin-right:25%; margin-top:30px; padding:10px; background-color:thistle");
    answer3.setAttribute("style", "text-align: center; width:50%; margin-left:25%; margin-right:25%; margin-top:30px; padding:10px; background-color:thistle");
    answer4.setAttribute("style", "text-align: center; width:50%; margin-left:25%; margin-right:25%; margin-top:30px; padding:10px; background-color:thistle");

    scoreAnswer_1()
}

// evaluates if answer selected from question 1 is correct
function scoreAnswer_1() {

    answer1.addEventListener("click", function() {
        feedback.textContent = "Incorrect"
        score.textContent = "-3 seconds"
        timerCount = timerCount - 3
        clearQuestion_1()
    });

    answer2.addEventListener("click", function() {
        feedback.textContent = "Correct!"
        clearQuestion_1()
    });

    answer3.addEventListener("click", function() {
        feedback.textContent = "Incorrect"
        score.textContent = "-3 seconds"
        timerCount = timerCount - 3
        clearQuestion_1()
    });
    answer4.addEventListener("click", function() {
        feedback.textContent = "Incorrect"
        score.textContent = "-3 seconds"
        timerCount = timerCount - 3
        clearQuestion_1()
    });
}

// clears out question 1, prepares question 2
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

// loads question 2
function question_2() {
    question.textContent = quizQuestions[1]
    styleQuestion_2()
}

// loads answers from question 2
function answer_2 () {
    answer1.textContent = question2Answers[0]
    answer2.textContent = question2Answers[1]
    answer3.textContent = question2Answers[2]
    answer4.textContent = question2Answers[3]
    styleAnswer_2()
}

// styles question 2
function styleQuestion_2() {
    question.style.display = "block"
    scoreAnswer_2()
}

// styles answers from question 2
function styleAnswer_2() {
    answers.style.display = "block"
    
    answer1.setAttribute("style", "text-align: center; width:50%; margin-left:25%; margin-right:25%; margin-top:30px; padding:10px; background-color:thistle");
    answer2.setAttribute("style", "text-align: center; width:50%; margin-left:25%; margin-right:25%; margin-top:30px; padding:10px; background-color:thistle");
    answer3.setAttribute("style", "text-align: center; width:50%; margin-left:25%; margin-right:25%; margin-top:30px; padding:10px; background-color:thistle");
    answer4.setAttribute("style", "text-align: center; width:50%; margin-left:25%; margin-right:25%; margin-top:30px; padding:10px; background-color:thistle");
    
    scoreAnswer_2()
}

// evaluates where answer selected from question 2 is correct
function scoreAnswer_2() {
    answer1.addEventListener("click", function() {
        feedback.textContent = "Incorrect"
        score.textContent = "-3 seconds"
        timerCount = timerCount - 3

        clearQuestion_2()
    });

    answer2.addEventListener("click", function() {
        feedback.textContent = "Correct!"
        
        clearQuestion_2()
    });
    answer3.addEventListener("click", function() {
        feedback.textContent = "Incorrect"
        score.textContent = "-3 seconds"
        timerCount = timerCount - 3
        
        clearQuestion_2()
    });
    answer4.addEventListener("click", function() {
        feedback.textContent = "Incorrect"
        score.textContent = "-3 seconds"
        timerCount = timerCount - 3
        
        console.log(timerCount)
        clearQuestion_2()
    });
}

// clears out question 2, prepares question 3
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

// loads question 3
function question_3() {
    question.textContent = quizQuestions[2]
    styleQuestion_3()
}

// loads answers from question 3
function answer_3 () {
    answer1.textContent = question3Answers[0]
    answer2.textContent = question3Answers[1]
    answer3.textContent = question3Answers[2]
    answer4.textContent = question3Answers[3]
    styleAnswer_3()
}

// styles question 3
function styleQuestion_3() {
    question.style.display = "block"
    scoreAnswer_3()
}

// styles answers from question 3
function styleAnswer_3() {
    answers.style.display = "block"

    answer1.setAttribute("style", "text-align: center; width:50%; margin-left:25%; margin-right:25%; margin-top:30px; padding:10px; background-color:thistle");
    answer2.setAttribute("style", "text-align: center; width:50%; margin-left:25%; margin-right:25%; margin-top:30px; padding:10px; background-color:thistle");
    answer3.setAttribute("style", "text-align: center; width:50%; margin-left:25%; margin-right:25%; margin-top:30px; padding:10px; background-color:thistle");
    answer4.setAttribute("style", "text-align: center; width:50%; margin-left:25%; margin-right:25%; margin-top:30px; padding:10px; background-color:thistle");
    scoreAnswer_3()
}

// evaluates where answers selected is correct from question 3
function scoreAnswer_3() {
    answer1.addEventListener("click", function() {
        feedback.textContent = "Incorrect"
        score.textContent = "-3 seconds"
        timerCount = timerCount - 3
        scoreForm()
    });

    answer2.addEventListener("click", function() {
        feedback.textContent = "Correct!"
        scoreForm()
    });
    answer3.addEventListener("click", function() {
        feedback.textContent = "Incorrect"
        score.textContent = "-3 seconds"
        timerCount = timerCount - 3
        scoreForm()
    });
    answer4.addEventListener("click", function() {
        feedback.textContent = "Incorrect"
        score.textContent = "-3 seconds"
        timerCount = timerCount - 3
        scoreForm()
    });
}

// clears out previous content, displays final score based upon timer value
function scoreForm() {
    feedback.textContent = ""
    score.textContent = ""
    question.textContent = ""
    answers.style.display = "none"
    nextButton.style.display = "none"
    timerElement.style.display = "none"

    endQuiz.style.display = "block"

    if (timerCount>0) {
        finalScore.textContent = timerCount
    } else finalScore.textContent = "System error (score deductions unresolved for Questions 2 & 3)"

    // reveals the high score screen and saves TWH as key for score (the value) into local storage
    submitButton.addEventListener("click", function() {
        
        endQuiz.style.display = "none"

        scoreScreen.style.display = "block"

        var highScores = localStorage.setItem("TWH", JSON.stringify(timerCount));
        
        console.log(highScores)
       
        high_Scores();
    
    });

}

// goBackButton reloads the page (also works based on HTML syntax); clears out the high score screen
function high_Scores() {

    goBackButton.addEventListener("click", function() {
        document.body.reload()
    });
   
    score_1.textContent = JSON.parse(localStorage.getItem("TWH"));

    clearScoresButton.addEventListener("click", function() {
        
        score_1.textContent = ""

    });
 
}

// listens to start button to call startGame function on click
startButton.addEventListener("click", startQuiz);


// mouseover and out events malfunctioned with click event (save syntax for future use)
// also adding this feature in makes code fairly lengthy
    // styles w/mouseover events
    //     answer1.addEventListener("mouseover", function() {
    //         answer1.style.backgroundColor = "rgb(98, 248, 98)";
    //    });
    //    // styles the answers with mouseout events
    //    answer1.addEventListener("mouseout", function() {
    //         answer1.style.backgroundColor = "thistle";
    //    });

// understood that this js contains redundant code (non-iterative), but I'm new to js at this time so this format made sense to me
// proper looping will be attempted on future applications
