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
  },
  {
    lyrics: "Live Alone",
    answers: [
      "Feromona",
      "PJ Harvey",
      "Franz Ferdinand",
      "Christopher Cross",
      "Kool and the Gang",
      "The Strokes"
    ],
    correctAnswer: "Franz Ferdinand"
  },
  {
    lyrics: "Sing it Back",
    answers: [
      "Ella Fitgerald",
      "Moloko",
      "Da Weasel",
      "Jonhy Cash",
      "Joy Division",
      "The Cure"
    ],
    correctAnswer: "Moloko"
  },
  {
    lyrics: "Hold the Line",
    answers: [
      "Red Hot Chilli Peppers",
      "The Cure",
      "The Streets",
      "Toto",
      "Peter Gabriel",
      "Dean Martin"
    ],
    correctAnswer: "Toto"
  }
];

var question = document.getElementById("question");
var possibleAnswers = document.querySelectorAll(".possibleAnswers");
var random = Math.floor(Math.random() * musicQuiz.length);
var showPossibleAnswers = musicQuiz[random].answers;

//Show the first question
function showQuestion() {
  //show a random question
  for (var i = 0; i < musicQuiz.length; i++) {
    question.textContent = musicQuiz[random].lyrics;
    //show the possible answers for the random question given
    for (var j = 0; j < showPossibleAnswers.length; j++) {
      for (var x = j; x < possibleAnswers.length; x++) {
        possibleAnswers[x].innerHTML = showPossibleAnswers[j];
      }
    }
  }
}
showQuestion();

//Guessing the correct answer
for (var x = 0; x < possibleAnswers.length; x++) {
  var answeredQuestions = [];
  possibleAnswers[x].addEventListener("click", guessQuestion);
}

var messageDisplay = document.getElementById("message");

function guessQuestion(e) {
  var correctAnswer = e.target.innerHTML;
  console.log(e.target.innerHTML);
  if (correctAnswer !== musicQuiz[random].correctAnswer) {
    messageDisplay.textContent = "Play Again";
    //teste();
  } else {
    //showQuestion();
    answeredQuestions.push(correctAnswer);
    //teste();
  }
}

/* function teste() {
  for (var x = 0; x < musicQuiz.length; x++) {
    //questions.textContent = musicQuiz[x].lyrics)
    question.textContent = musicQuiz[x].lyrics;
    possibleAnswers.forEach(function() {
      for (var j = 0; j < showPossibleAnswers.length; j++) {
        //for (var x = j; x < possibleAnswers.length; x++) {
        console.log(possibleAnswers[j]);
        //}
      }
    });
  }
} */

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
