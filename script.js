// js file for coding quiz, TWH, 6-15-21

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

// timer that counts down from 30 seconds; event initiated by clicking start btn
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

// empties the start menu

startBtn.addEventListener("click", function start() {
    title.textContent = "";
    instructions.textContent = "";
    startBtn.remove();
    score.textContent = "";
});




