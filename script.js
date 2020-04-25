var questionText = document.querySelector("#question");
var startButton = document.querySelector(".startButton");
var answerBox = document.querySelector("#answers")
var body = document.getElementById("answers");



var score = [];

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

            score.push(10);

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

            // setTimeout(function() { fourthQuestion(); }, 1000);
        });
        //wrong answers
        answerOne.addEventListener("click", function(event) {
            event.preventDefault();
        
            var wrongAnswer = document.createElement("p");
            wrongAnswer.innerHTML = "<p>Wrong!</p>";
            body.appendChild(wrongAnswer);

            // setTimeout(function() { fourthQuestion(); }, 1000);
        });

        answerTwo.addEventListener("click", function(event) {
            event.preventDefault();
        
            var wrongAnswer = document.createElement("p");
            wrongAnswer.innerHTML = "<p>Wrong!</p>";
            body.appendChild(wrongAnswer);

            // setTimeout(function() { fourthQuestion(); }, 1000);
        });

        answerThree.addEventListener("click", function(event) {
            event.preventDefault();
        
            var wrongAnswer = document.createElement("p");
            wrongAnswer.innerHTML = "<p>Wrong!</p>";
            body.appendChild(wrongAnswer);

            // setTimeout(function() { fourthQuestion(); }, 1000);
        });
};