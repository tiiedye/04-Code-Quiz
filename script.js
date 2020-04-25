var questionText = document.querySelector("#question");
var startButton = document.querySelector(".startButton");
var answerBox = document.querySelector("#answers")
var body = document.getElementById("answers");

var score = [];

//triggers first question
startButton.addEventListener("click", function(event) {
    event.preventDefault();

    questionText.textContent = "1. First Question";
    answerBox.innerHTML = "";

    var answerOne = document.createElement("li");
    answerOne.innerHTML = "<button>answer 1</button>";
    body.appendChild(answerOne);
    score.push(10);

    var answerTwo = document.createElement("li");
    answerTwo.innerHTML = "<button>answer 2</button>";
    body.appendChild(answerTwo);

    var answerThree = document.createElement("li");
    answerThree.innerHTML = "<button>answer 3</button>";
    body.appendChild(answerThree);

    var answerFour = document.createElement("li");
    answerFour.innerHTML = "<button>answer 4</button>";
    body.appendChild(answerFour);
})