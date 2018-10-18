var musicQuiz = [
  {
    lyrics: "Now the drugs don´t work",
    answers: [
      "The Verve",
      "Oasis",
      "Adele",
      "Rolling Stones",
      "Chris de Burgh",
      "Ceasars"
    ],
    correctAnswer: "The Verve"
  },
  {
    lyrics: "Go your own way",
    answers: [
      "The Chemical Brothers",
      "U2",
      "The Doors",
      "Fleetwood Mac",
      "Moloko",
      "The Beatles"
    ],
    correctAnswer: "Fleetwood Mac"
  }
];

var question = document.getElementById("question");
var possibleAnswers = document.querySelectorAll(".possibleAnswers");

//show a random question
for (var i = 0; i < musicQuiz.length; i++) {
  var random = Math.floor(Math.random() * musicQuiz.length);
  question.textContent = musicQuiz[random].lyrics;
  var showPossibleAnswers = musicQuiz[random].answers;
  //show the possible answers for the random question given
  for (var j = 0; j < showPossibleAnswers.length; j++) {
    for (var x = j; x < possibleAnswers.length; x++) {
      possibleAnswers[x].innerHTML = showPossibleAnswers[j];
      /* possibleAnswers[x].addEventListener("click", function() {
        var clickedColor = this.possibleAnswers;
        console.log("hello");
      }); */
    }
  }
}

//Guessing the correct answer
for (var x = 0; x < possibleAnswers.length; x++) {
  possibleAnswers[x].addEventListener("click", doSomething);
}
var messageDisplay = document.getElementById("message");
function doSomething(e) {
  var correctAnswer = e.target.innerHTML;
  console.log(e.target.innerHTML);
  if (correctAnswer !== musicQuiz[random].correctAnswer) {
    messageDisplay.textContent = "Play Again";
  }
}

//generate random colors
var colors = generateRandomColors(6);
for (var i = 0; i < possibleAnswers.length; i++) {
  possibleAnswers[i].style.backgroundColor = colors[i];
}

function generateRandomColors(num) {
  //make an array
  var arr = [];
  //repeat num times
  for (var i = 0; i < num; i++) {
    //get random color and push into arr
    arr.push(randomColor());
  }
  //return that array
  return arr;
}
function randomColor() {
  //pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);
  //pick a "blue" from 0 - 255
  var b = Math.floor(Math.random() * 256);
  //pick a "green" from 0 - 255
  var g = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
