// js file for coding quiz, TWH, 6-15-21

// body global var
var body = document.body

// instruction global var
var instructions = document.querySelector(".instructions")

//title global var
var title = document.querySelector(".title")

//score global var
var score = document.querySelector("#score")

// startBtn global var
var startBtn = document.querySelector(".start-btn");

// timer global var
var timer = document.getElementById('timer');

// timer that counts down from XX seconds; event initiated by clicking start btn
startBtn.addEventListener("click", function start() {
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
 }); 

// empties the start menu; readies for question 1 and the array of objects filled w/questions
startBtn.addEventListener("click", function start() {
    title.textContent = "";
    instructions.textContent = "";
    startBtn.remove();
    score.textContent = "";
});

// starts the quiz with each question as an object that is iterated until all questions are asked
startBtn.addEventListener("click", function start() {

    // creates element based on tag entered by user
    var question = document.createElement("h3");

    // adds text content to created tag
    question.textContent = "Commonly used data types DO NOT include:"
  
    // appends tag as child of document body
    body.appendChild(question);
   
    // styles the question
    question.setAttribute("style", "margin:auto; width:50%; text-align:center;");

});


