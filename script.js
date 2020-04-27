var questionText = document.querySelector("#question");
var startButton = document.querySelector(".startButton");
var answerBox = document.querySelector("#answers")
var body = document.getElementById("answers");

//calls first question and starts the test
startButton.addEventListener("click", function(event) {
    event.preventDefault();

    questionText.textContent = "1. First Question";
    answerBox.innerHTML = "";

    var answerOne = document.createElement("li");
    answerOne.innerHTML = "<button>answer 1</button>";
    body.appendChild(answerOne);

    var answerTwo = document.createElement("li");
    answerTwo.innerHTML = "<button>answer 2</button>";
    body.appendChild(answerTwo);

    var answerThree = document.createElement("li");
    answerThree.innerHTML = "<button>answer 3</button>";
    body.appendChild(answerThree);

    var answerFour = document.createElement("li");
    answerFour.innerHTML = "<button>answer 4</button>";
    body.appendChild(answerFour);
        //correctAnswer
        answerOne.addEventListener("click", function(event) {
            event.preventDefault();
        
            var correctAnswer = document.createElement("p");
            correctAnswer.innerHTML = "<p>Correct!</p>";
            body.appendChild(correctAnswer);

            localStorage.setItem("score1", 10)

            setTimeout(function() { secondQuestion(); }, 1000);
        });
        //wrong answers
        answerTwo.addEventListener("click", function(event) {
            event.preventDefault();
        
            var wrongAnswer = document.createElement("p");
            wrongAnswer.innerHTML = "<p>Wrong!</p>";
            body.appendChild(wrongAnswer);

            setTimeout(function() { secondQuestion(); }, 1000);
        });

        answerThree.addEventListener("click", function(event) {
            event.preventDefault();
        
            var wrongAnswer = document.createElement("p");
            wrongAnswer.innerHTML = "<p>Wrong!</p>";
            body.appendChild(wrongAnswer);

            setTimeout(function() { secondQuestion(); }, 1000);
        });

        answerFour.addEventListener("click", function(event) {
            event.preventDefault();
        
            var wrongAnswer = document.createElement("p");
            wrongAnswer.innerHTML = "<p>Wrong!</p>";
            body.appendChild(wrongAnswer);

            setTimeout(function() { secondQuestion(); }, 1000);
        });
});

//second question

function secondQuestion() {
    questionText.textContent = "2. Second Question";
    answerBox.innerHTML = "";

    var answerOne = document.createElement("li");
    answerOne.innerHTML = "<button>answer 1</button>";
    body.appendChild(answerOne);

    var answerTwo = document.createElement("li");
    answerTwo.innerHTML = "<button>answer 2</button>";
    body.appendChild(answerTwo);

    var answerThree = document.createElement("li");
    answerThree.innerHTML = "<button>answer 3</button>";
    body.appendChild(answerThree);

    var answerFour = document.createElement("li");
    answerFour.innerHTML = "<button>answer 4</button>";
    body.appendChild(answerFour);
        //correct answer
        answerThree.addEventListener("click", function(event) {
            event.preventDefault();
        
            var correctAnswer = document.createElement("p");
            correctAnswer.innerHTML = "<p>Correct!</p>";
            body.appendChild(correctAnswer);

            localStorage.setItem("score2", 10)

            setTimeout(function() { thirdQuestion(); }, 1000);
        });

        //wrong answers
        answerOne.addEventListener("click", function(event) {
            event.preventDefault();
        
            var wrongAnswer = document.createElement("p");
            wrongAnswer.innerHTML = "<p>Wrong!</p>";
            body.appendChild(wrongAnswer);

            setTimeout(function() { thirdQuestion(); }, 1000);
        });

        answerTwo.addEventListener("click", function(event) {
            event.preventDefault();
        
            var wrongAnswer = document.createElement("p");
            wrongAnswer.innerHTML = "<p>Wrong!</p>";
            body.appendChild(wrongAnswer);

            setTimeout(function() { thirdQuestion(); }, 1000);
        });

        answerFour.addEventListener("click", function(event) {
            event.preventDefault();
        
            var wrongAnswer = document.createElement("p");
            wrongAnswer.innerHTML = "<p>Wrong!</p>";
            body.appendChild(wrongAnswer);

            setTimeout(function() { thirdQuestion(); }, 1000);
        });
};

//third question
function thirdQuestion() {
    questionText.textContent = "3. Third Question";
    answerBox.innerHTML = "";

    var answerOne = document.createElement("li");
    answerOne.innerHTML = "<button>answer 1</button>";
    body.appendChild(answerOne);

    var answerTwo = document.createElement("li");
    answerTwo.innerHTML = "<button>answer 2</button>";
    body.appendChild(answerTwo);

    var answerThree = document.createElement("li");
    answerThree.innerHTML = "<button>answer 3</button>";
    body.appendChild(answerThree);

    var answerFour = document.createElement("li");
    answerFour.innerHTML = "<button>answer 4</button>";
    body.appendChild(answerFour);
        //correct answer
        answerFour.addEventListener("click", function(event) {
            event.preventDefault();
        
            var correctAnswer = document.createElement("p");
            correctAnswer.innerHTML = "<p>Correct!</p>";
            body.appendChild(correctAnswer);

            localStorage.setItem("score3", 10)

            setTimeout(function() { fourthQuestion(); }, 1000);
        });
        //wrong answers
        answerOne.addEventListener("click", function(event) {
            event.preventDefault();
        
            var wrongAnswer = document.createElement("p");
            wrongAnswer.innerHTML = "<p>Wrong!</p>";
            body.appendChild(wrongAnswer);

            setTimeout(function() { fourthQuestion(); }, 1000);
        });

        answerTwo.addEventListener("click", function(event) {
            event.preventDefault();
        
            var wrongAnswer = document.createElement("p");
            wrongAnswer.innerHTML = "<p>Wrong!</p>";
            body.appendChild(wrongAnswer);

            setTimeout(function() { fourthQuestion(); }, 1000);
        });

        answerThree.addEventListener("click", function(event) {
            event.preventDefault();
        
            var wrongAnswer = document.createElement("p");
            wrongAnswer.innerHTML = "<p>Wrong!</p>";
            body.appendChild(wrongAnswer);

            setTimeout(function() { fourthQuestion(); }, 1000);
        });
};

//fourth question
function fourthQuestion() {
    questionText.textContent = "4. Fourth Question";
    answerBox.innerHTML = "";

    var answerOne = document.createElement("li");
    answerOne.innerHTML = "<button>answer 1</button>";
    body.appendChild(answerOne);

    var answerTwo = document.createElement("li");
    answerTwo.innerHTML = "<button>answer 2</button>";
    body.appendChild(answerTwo);

    var answerThree = document.createElement("li");
    answerThree.innerHTML = "<button>answer 3</button>";
    body.appendChild(answerThree);

    var answerFour = document.createElement("li");
    answerFour.innerHTML = "<button>answer 4</button>";
    body.appendChild(answerFour);
        //correct answer
        answerThree.addEventListener("click", function(event) {
            event.preventDefault();
        
            var correctAnswer = document.createElement("p");
            correctAnswer.innerHTML = "<p>Correct!</p>";
            body.appendChild(correctAnswer);

            localStorage.setItem("score4", 10)

            setTimeout(function() { fifthQuestion(); }, 1000);
        });
        //wrong answers
        answerOne.addEventListener("click", function(event) {
            event.preventDefault();
        
            var wrongAnswer = document.createElement("p");
            wrongAnswer.innerHTML = "<p>Wrong!</p>";
            body.appendChild(wrongAnswer);

            setTimeout(function() { fifthQuestion(); }, 1000);
        });

        answerTwo.addEventListener("click", function(event) {
            event.preventDefault();
        
            var wrongAnswer = document.createElement("p");
            wrongAnswer.innerHTML = "<p>Wrong!</p>";
            body.appendChild(wrongAnswer);

            setTimeout(function() { fifthQuestion(); }, 1000);
        });

        answerFour.addEventListener("click", function(event) {
            event.preventDefault();
        
            var wrongAnswer = document.createElement("p");
            wrongAnswer.innerHTML = "<p>Wrong!</p>";
            body.appendChild(wrongAnswer);

            setTimeout(function() { fifthQuestion(); }, 1000);
        });
};

//fifth question
function fifthQuestion() {
    questionText.textContent = "5. Fifth Question";
    answerBox.innerHTML = "";

    var answerOne = document.createElement("li");
    answerOne.innerHTML = "<button>answer 1</button>";
    body.appendChild(answerOne);

    var answerTwo = document.createElement("li");
    answerTwo.innerHTML = "<button>answer 2</button>";
    body.appendChild(answerTwo);

    var answerThree = document.createElement("li");
    answerThree.innerHTML = "<button>answer 3</button>";
    body.appendChild(answerThree);

    var answerFour = document.createElement("li");
    answerFour.innerHTML = "<button>answer 4</button>";
    body.appendChild(answerFour);
        //correct answer
        answerOne.addEventListener("click", function(event) {
            event.preventDefault();
        
            var correctAnswer = document.createElement("p");
            correctAnswer.innerHTML = "<p>Correct!</p>";
            body.appendChild(correctAnswer);

            localStorage.setItem("score5", 10)

            setTimeout(function() { submitScore(); }, 1000);
        });
        //wrong answers
        answerTwo.addEventListener("click", function(event) {
            event.preventDefault();
        
            var wrongAnswer = document.createElement("p");
            wrongAnswer.innerHTML = "<p>Wrong!</p>";
            body.appendChild(wrongAnswer);

            setTimeout(function() { submitScore(); }, 1000);
        });

        answerThree.addEventListener("click", function(event) {
            event.preventDefault();
        
            var wrongAnswer = document.createElement("p");
            wrongAnswer.innerHTML = "<p>Wrong!</p>";
            body.appendChild(wrongAnswer);

            setTimeout(function() { submitScore(); }, 1000);
        });

        answerFour.addEventListener("click", function(event) {
            event.preventDefault();
        
            var wrongAnswer = document.createElement("p");
            wrongAnswer.innerHTML = "<p>Wrong!</p>";
            body.appendChild(wrongAnswer);

            setTimeout(function() { submitScore(); }, 1000);
        });
};

//Submit score
function submitScore() {
    questionText.textContent = "Your Score!";
    answerBox.innerHTML = "";

    var result = (JSON.parse(localStorage.getItem("score1")) + JSON.parse(localStorage.getItem("score2")) + JSON.parse(localStorage.getItem("score3")) + JSON.parse(localStorage.getItem("score4")) + JSON.parse(localStorage.getItem("score5")));
    localStorage.setItem("result", JSON.stringify(result));

    var submitResult = document.createElement("p");
    submitResult.innerHTML = "Congrats! Your score is:"
    body.appendChild(submitResult);

    var displayResult = document.createElement("p");
    displayResult.textContent = result + " out of 50";
    body.appendChild(displayResult);

    var submitName = document.createElement("input");
    body.appendChild(submitName);

    var submitButton = document.createElement("p");
    submitButton.innerHTML = "<button>Submit High Score</button>";
    body.appendChild(submitButton);
}