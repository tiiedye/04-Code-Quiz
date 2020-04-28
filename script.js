var questionText = document.querySelector("#question");
var startButton = document.querySelector(".startButton");
var answerBox = document.querySelector("#answers")
var body = document.getElementById("answers");

var result = [];
var nameScore = [];

console.log(nameScore);

//timer function
function countdown(seconds) {
    var seconds = 60;
    function tick() {
        var counter = document.getElementById("counter");
        var currentSeconds = seconds-1
        seconds--;
        counter.innerHTML = currentSeconds.toString();
        if( seconds > 0 ) {
            setTimeout(tick, 1000);
        } else {
            if(seconds < 1){
                submitScore();
            }
        }
    }
    tick();
}

//calls first question and starts the test
startButton.addEventListener("click", function(event) {
    event.preventDefault();
    countdown();

    questionText.textContent = "1. _____ is the standard markup language for web pages.";
    answerBox.innerHTML = "";

    var answerOne = document.createElement("li");
    answerOne.innerHTML = "<button>HTML</button>";
    body.appendChild(answerOne);

    var answerTwo = document.createElement("li");
    answerTwo.innerHTML = "<button>CSS</button>";
    body.appendChild(answerTwo);

    var answerThree = document.createElement("li");
    answerThree.innerHTML = "<button>JavaScript</button>";
    body.appendChild(answerThree);

    var answerFour = document.createElement("li");
    answerFour.innerHTML = "<button>jQuery</button>";
    body.appendChild(answerFour);
        //correctAnswer
        answerOne.addEventListener("click", function(event) {
            event.preventDefault();
        
            var correctAnswer = document.createElement("p");
            correctAnswer.innerHTML = "<p>Correct!</p>";
            body.appendChild(correctAnswer);

            result.push(10);

            setTimeout(function() { secondQuestion(); }, 1000);
        });
        //wrong answers
        answerTwo.addEventListener("click", function(event) {
            event.preventDefault();
        
            var wrongAnswer = document.createElement("p");
            wrongAnswer.innerHTML = "<p>Wrong!</p>";
            body.appendChild(wrongAnswer);

            result.push(0);

            setTimeout(function() { secondQuestion(); }, 1000);
        });

        answerThree.addEventListener("click", function(event) {
            event.preventDefault();
        
            var wrongAnswer = document.createElement("p");
            wrongAnswer.innerHTML = "<p>Wrong!</p>";
            body.appendChild(wrongAnswer);

            result.push(0);

            setTimeout(function() { secondQuestion(); }, 1000);
        });

        answerFour.addEventListener("click", function(event) {
            event.preventDefault();
        
            var wrongAnswer = document.createElement("p");
            wrongAnswer.innerHTML = "<p>Wrong!</p>";
            body.appendChild(wrongAnswer);

            result.push(0);

            setTimeout(function() { secondQuestion(); }, 1000);
        });
});

//second question

function secondQuestion() {
    questionText.textContent = "2. What does CSS stand for?";
    answerBox.innerHTML = "";

    var answerOne = document.createElement("li");
    answerOne.innerHTML = "<button>Cats Snuggle Snickerdoodles</button>";
    body.appendChild(answerOne);

    var answerTwo = document.createElement("li");
    answerTwo.innerHTML = "<button>Can't See Screen</button>";
    body.appendChild(answerTwo);

    var answerThree = document.createElement("li");
    answerThree.innerHTML = "<button>Cascading Stlye Sheet</button>";
    body.appendChild(answerThree);

    var answerFour = document.createElement("li");
    answerFour.innerHTML = "<button>Complete Simple Syntax</button>";
    body.appendChild(answerFour);
        //correct answer
        answerThree.addEventListener("click", function(event) {
            event.preventDefault();
        
            var correctAnswer = document.createElement("p");
            correctAnswer.innerHTML = "<p>Correct!</p>";
            body.appendChild(correctAnswer);

            result.push(10);

            setTimeout(function() { thirdQuestion(); }, 1000);
        });

        //wrong answers
        answerOne.addEventListener("click", function(event) {
            event.preventDefault();
        
            var wrongAnswer = document.createElement("p");
            wrongAnswer.innerHTML = "<p>Wrong!</p>";
            body.appendChild(wrongAnswer);

            result.push(0);

            setTimeout(function() { thirdQuestion(); }, 1000);
        });

        answerTwo.addEventListener("click", function(event) {
            event.preventDefault();
        
            var wrongAnswer = document.createElement("p");
            wrongAnswer.innerHTML = "<p>Wrong!</p>";
            body.appendChild(wrongAnswer);

            result.push(0);

            setTimeout(function() { thirdQuestion(); }, 1000);
        });

        answerFour.addEventListener("click", function(event) {
            event.preventDefault();
        
            var wrongAnswer = document.createElement("p");
            wrongAnswer.innerHTML = "<p>Wrong!</p>";
            body.appendChild(wrongAnswer);

            result.push(0);

            setTimeout(function() { thirdQuestion(); }, 1000);
        });
};

//third question
function thirdQuestion() {
    questionText.textContent = "3. Variables CANNOT be which one of these?";
    answerBox.innerHTML = "";

    var answerOne = document.createElement("li");
    answerOne.innerHTML = "<button>Booleans</button>";
    body.appendChild(answerOne);

    var answerTwo = document.createElement("li");
    answerTwo.innerHTML = "<button>Strings</button>";
    body.appendChild(answerTwo);

    var answerThree = document.createElement("li");
    answerThree.innerHTML = "<button>Numbers</button>";
    body.appendChild(answerThree);

    var answerFour = document.createElement("li");
    answerFour.innerHTML = "<button>Alerts</button>";
    body.appendChild(answerFour);
        //correct answer
        answerFour.addEventListener("click", function(event) {
            event.preventDefault();
        
            var correctAnswer = document.createElement("p");
            correctAnswer.innerHTML = "<p>Correct!</p>";
            body.appendChild(correctAnswer);

            result.push(10);

            setTimeout(function() { fourthQuestion(); }, 1000);
        });
        //wrong answers
        answerOne.addEventListener("click", function(event) {
            event.preventDefault();
        
            var wrongAnswer = document.createElement("p");
            wrongAnswer.innerHTML = "<p>Wrong!</p>";
            body.appendChild(wrongAnswer);

            result.push(0);

            setTimeout(function() { fourthQuestion(); }, 1000);
        });

        answerTwo.addEventListener("click", function(event) {
            event.preventDefault();
        
            var wrongAnswer = document.createElement("p");
            wrongAnswer.innerHTML = "<p>Wrong!</p>";
            body.appendChild(wrongAnswer);

            result.push(0);

            setTimeout(function() { fourthQuestion(); }, 1000);
        });

        answerThree.addEventListener("click", function(event) {
            event.preventDefault();
        
            var wrongAnswer = document.createElement("p");
            wrongAnswer.innerHTML = "<p>Wrong!</p>";
            body.appendChild(wrongAnswer);

            result.push(0);

            setTimeout(function() { fourthQuestion(); }, 1000);
        });
};

//fourth question
function fourthQuestion() {
    questionText.textContent = "4. ______ can update and change HTML and CSS on a webpage.";
    answerBox.innerHTML = "";

    var answerOne = document.createElement("li");
    answerOne.innerHTML = "<button>MochaScript</button>";
    body.appendChild(answerOne);

    var answerTwo = document.createElement("li");
    answerTwo.innerHTML = "<button>JavaChip</button>";
    body.appendChild(answerTwo);

    var answerThree = document.createElement("li");
    answerThree.innerHTML = "<button>JavaScript</button>";
    body.appendChild(answerThree);

    var answerFour = document.createElement("li");
    answerFour.innerHTML = "<button>Coffee???</button>";
    body.appendChild(answerFour);
        //correct answer
        answerThree.addEventListener("click", function(event) {
            event.preventDefault();
        
            var correctAnswer = document.createElement("p");
            correctAnswer.innerHTML = "<p>Correct!</p>";
            body.appendChild(correctAnswer);

            result.push(10);

            setTimeout(function() { fifthQuestion(); }, 1000);
        });
        //wrong answers
        answerOne.addEventListener("click", function(event) {
            event.preventDefault();
        
            var wrongAnswer = document.createElement("p");
            wrongAnswer.innerHTML = "<p>Wrong!</p>";
            body.appendChild(wrongAnswer);

            result.push(0);

            setTimeout(function() { fifthQuestion(); }, 1000);
        });

        answerTwo.addEventListener("click", function(event) {
            event.preventDefault();
        
            var wrongAnswer = document.createElement("p");
            wrongAnswer.innerHTML = "<p>Wrong!</p>";
            body.appendChild(wrongAnswer);

            result.push(0);

            setTimeout(function() { fifthQuestion(); }, 1000);
        });

        answerFour.addEventListener("click", function(event) {
            event.preventDefault();
        
            var wrongAnswer = document.createElement("p");
            wrongAnswer.innerHTML = "<p>Wrong!</p>";
            body.appendChild(wrongAnswer);

            result.push(0);

            setTimeout(function() { fifthQuestion(); }, 1000);
        });
};

//fifth question
function fifthQuestion() {
    questionText.textContent = "5. The purpose of _______ is to make it much easier to use JavaScript on your website.";
    answerBox.innerHTML = "";

    var answerOne = document.createElement("li");
    answerOne.innerHTML = "<button>jQuery</button>";
    body.appendChild(answerOne);

    var answerTwo = document.createElement("li");
    answerTwo.innerHTML = "<button>jPerry</button>";
    body.appendChild(answerTwo);

    var answerThree = document.createElement("li");
    answerThree.innerHTML = "<button>jMerry</button>";
    body.appendChild(answerThree);

    var answerFour = document.createElement("li");
    answerFour.innerHTML = "<button>jShorthand</button>";
    body.appendChild(answerFour);
        //correct answer
        answerOne.addEventListener("click", function(event) {
            event.preventDefault();
        
            var correctAnswer = document.createElement("p");
            correctAnswer.innerHTML = "<p>Correct!</p>";
            body.appendChild(correctAnswer);

            result.push(10);

            setTimeout(function() { submitScore(); }, 1000);
        });
        //wrong answers
        answerTwo.addEventListener("click", function(event) {
            event.preventDefault();
        
            var wrongAnswer = document.createElement("p");
            wrongAnswer.innerHTML = "<p>Wrong!</p>";
            body.appendChild(wrongAnswer);

            result.push(0);

            setTimeout(function() { submitScore(); }, 1000);
        });

        answerThree.addEventListener("click", function(event) {
            event.preventDefault();
        
            var wrongAnswer = document.createElement("p");
            wrongAnswer.innerHTML = "<p>Wrong!</p>";
            body.appendChild(wrongAnswer);

            result.push(0);

            setTimeout(function() { submitScore(); }, 1000);
        });

        answerFour.addEventListener("click", function(event) {
            event.preventDefault();
        
            var wrongAnswer = document.createElement("p");
            wrongAnswer.innerHTML = "<p>Wrong!</p>";
            body.appendChild(wrongAnswer);

            result.push(0);

            setTimeout(function() { submitScore(); }, 1000);
        });
};

//Submit score
function submitScore() {
    questionText.textContent = "Your Score!";
    answerBox.innerHTML = "";

    var submitResult = document.createElement("p");
    submitResult.innerHTML = "Congrats! Your score is:"
    body.appendChild(submitResult);

    var displayResult = document.createElement("p");
    displayResult.textContent = (result[0] + result[1] + result[2] + result[3] + result[4] + " out of 50");
    body.appendChild(displayResult);

    var submitName = document.createElement("input");
    submitName.setAttribute("id", "nameInput");
    body.appendChild(submitName);

    var submitButton = document.createElement("button");
    submitButton.innerHTML = "Submit High Score";
    body.appendChild(submitButton);

    var highScores = document.createElement("p");
    highScores.innerHTML = "Go to <a href='high-scores.html'>High Scores</a>";
    body.appendChild(highScores);

    localStorage.setItem("result", JSON.stringify(result));

    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
    
        var user = submitName.value.trim();
    
        localStorage.setItem("user", JSON.stringify(user));

        totalScore = (result[0] + result[1] + result[2] + result[3] + result[4]);
        localStorage.setItem("totalScore", totalScore);
    });
}