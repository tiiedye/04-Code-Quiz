var scoreDiv = document.querySelector("#scoreDiv");

var user = localStorage.getItem("user", JSON.stringify(user));
var totalScore = localStorage.getItem("totalScore", JSON.stringify(totalScore));

var nameScore = [];

var displayUser = ("Name: " + user + ", Score: " + totalScore);
nameScore.push(displayUser);

for (var i = 0; i < nameScore.length; i++) {

    var display = nameScore[i];

    var newEntry = document.createElement("p");
    newEntry.textContent = display;
    scoreDiv.appendChild(newEntry);
}