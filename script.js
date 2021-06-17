// js file for coding quiz, TWH, 6-15-21

// global selectors
var body = document.body
var instructions = document.querySelector(".instructions")
var title = document.querySelector(".title")
var score = document.querySelector(".score")
var startButton = document.querySelector(".start-btn")
var timerElement = document.querySelector(".timer")
var question = document.querySelector(".question")
var answers = document.querySelector(".answers")
var answer1 = document.querySelector(".answer1")
var answer2 = document.querySelector(".answer2")
var answer3 = document.querySelector(".answer3")
var answer4 = document.querySelector(".answer4")

// global vars
var timer;
var timerCount;

// quiz array w/questions and answers
const quizQuestions = ["Commonly used data types DO NOT include: ", 
                        "The condition in an if/else statement is enclosed within ______.", 
                        "A very useful tool used during development and debugging for printing content to the debugger is: ",
                    ] 


const question1Answers = ["A. Strings", "B. Prompts", "C. Booleans", "D. Numbers"] 
const question2Answers = ["A. Quotes", "B. Parentheses", "C. Square Brackets", "D. Curly Brackets"]
const question3Answers = [ "A. Javascript", "B. console.log", "C. terminal/bash", "D. Google"]

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
    nextQuestion()
    clearStart()
}

// clear empties start menu content
function clearStart() {
    title.textContent = "";
    instructions.textContent = "";
    startButton.remove();
    score.textContent = "";
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
function nextQuestion () {
    for (let i=0; i<quizQuestions.length; i++)

        question.textContent = quizQuestions[0]

    for (let i=0; i<question1Answers.length; i++)
          
        answer1.textContent = question1Answers[0]

        console.log(question1Answers[0])

        

  



    


}












// listens to start button to call startGame function on click
startButton.addEventListener("click", startQuiz);














    // creates element based on tag entered by user
    // var question1 = document.createElement("h3");        
    // var answer1 = document.createElement("button")
    // var answer2 = document.createElement("button")
    // var answer3 = document.createElement("button")
    // var answer4 = document.createElement("button")


    // // adds text content to created tag
    // question1.textContent = "Commonly used data types DO NOT include:"
    // answer1.textContent = "A. strings"
    // answer2.textContent = "B. arrays"
    // answer3.textContent = "C. prompts"
    // answer4.textContent = "D. booleans"

    // // appends tag as child of document body
    // body.appendChild(question1);
    // body.appendChild(answer1);
    // body.appendChild(answer2);
    // body.appendChild(answer3);
    // body.appendChild(answer4);

    // // styles the question
    // question1.setAttribute("style", "margin:auto; width:50%; text-align:center;");
    // // styles the answers with mouseover and mouseout events
    // answer1.setAttribute("style", "text-align: center; width:50%; margin-left:25%; margin-right:25%; margin-top:30px; padding:10px; background-color:thistle");
    //     answer1.addEventListener("mouseover", function() {
    //         answer1.style.backgroundColor = "rgb(98, 248, 98)";
    //     });

    //     answer1.addEventListener("mouseout", function() {
    //         answer1.style.backgroundColor = "thistle";
    //         });
    // answer2.setAttribute("style", "text-align: center; width:50%; margin-left:25%; margin-right:25%; padding:10px; background-color:thistle");
    //     answer2.addEventListener("mouseover", function() {
    //     answer2.style.backgroundColor = "rgb(98, 248, 98)";
    //     });

    //      answer2.addEventListener("mouseout", function() {
    //     answer2.style.backgroundColor = "thistle";
    //     });
    // answer3.setAttribute("style", "text-align: center; width:50%; margin-left:25%; margin-right:25%; padding:10px; background-color:thistle");
    //     answer3.addEventListener("mouseover", function() {
    //     answer3.style.backgroundColor = "rgb(98, 248, 98)";
    // });

    //     answer3.addEventListener("mouseout", function() {
    //     answer3.style.backgroundColor = "thistle";
    // }); 
    // answer4.setAttribute("style", "text-align: center; width:50%; margin-left:25%; margin-right:25%; padding:10px; background-color:thistle");
    //     answer4.addEventListener("mouseover", function() {
    //     answer4.style.backgroundColor = "rgb(98, 248, 98)";
    //     });

    //     answer4.addEventListener("mouseout", function() {
    //     answer4.style.backgroundColor = "thistle";
    //     }); 

    // answer1.addEventListener("mouseover", function() {
    //         answer1.style.backgroundColor = "rgb(98, 248, 98)";
    //     });




 

    




