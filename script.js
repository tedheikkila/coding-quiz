// js file for coding quiz, TWH, 6-15-21


// code the start button to initiate the timer





var timer = document.getElementById('timer');

// Timer that counts down from 30 seconds; event initiated by clicking start btn
function countdown() {
    var timeLeft = 30;
  
    // uses the `setInterval()` method to call a function to be executed every 1 second
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timeLeft` to show the remaining seconds
        timer.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timer.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timer` to an empty string
        timer.textContent = "";
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        displayQuizOver();
      }
      // change back to 1000 later
    }, 100);
  }

    // Displays the quiz's final timer message; this directs user to final score screen
    function displayQuizOver() {
        var quizOverMessage = "Time's up!"
        timer.textContent = quizOverMessage
    }
    
  countdown();