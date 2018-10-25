var questions = [
  new Quiz(
    "Now the drugs don´t work",
    [
      "The Verve",
      "Oasis",
      "Adele",
      "Rolling Stones",
      "Chris de Burgh",
      "Ceasars"
    ],
    "The Verve"
  ),
  new Quiz(
    "Go your own way",
    [
      "The Chemical Brothers",
      "U2",
      "The Doors",
      "Fleetwood Mac",
      "Moloko",
      "The Beatles"
    ],
    "Fleetwood Mac"
  ),

  new Quiz(
    "Live Alone",
    [
      "Feromona",
      "PJ Harvey",
      "Franz Ferdinand",
      "Christopher Cross",
      "Kool and the Gang",
      "The Strokes"
    ],
    "Franz Ferdinand"
  ),
  new Quiz(
    "Sing it Back",
    [
      "Ella Fitgerald",
      "Moloko",
      "Da Weasel",
      "Jonhy Cash",
      "Joy Division",
      "The Cure"
    ],
    "Moloko"
  ),
  new Quiz(
    "Hold the Line",
    [
      "Red Hot Chilli Peppers",
      "The Cure",
      "The Streets",
      "Toto",
      "Peter Gabriel",
      "Dean Martin"
    ],
    "Toto"
  )
];

var score = new Score(questions);
runQuiz();

function Quiz(question, choices, answer) {
  this.question = question;
  this.choices = choices;
  this.answer = answer;
}

function Score(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}

Quiz.prototype.correctAnswer = function(choice) {
  return choice === this.answer;
};

Score.prototype.getQuestionIndex = function() {
  return this.questions[this.questionIndex];
};

//If the quiz has ended
Score.prototype.isEnded = function() {
  return this.questions.length === this.questionIndex;
};

//If the answer is correct

Score.prototype.guess = function(answer) {
  this.questionIndex++;
  if (this.getQuestionIndex().correctAnswer(answer)) {
    this.score++;
  }
};

function runQuiz() {
  if (score.isEnded()) {
    //showScores();
  } else {
    //show question
    var question = document.getElementById("question");
    question.innerHTML = score.getQuestionIndex().text;
  }
}

runQuiz();

/* 
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
var answers = Object.values(musicQuiz[random].answers);

//answers.forEach(answer => console.log(answer));

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
    teste();
  } else {
    showQuestion();
    answeredQuestions.push(correctAnswer);
    teste();
  }
}

function teste() {
  for (var x = 0; x < musicQuiz.length; x++) {
    //questions.textContent = musicQuiz[x].lyrics)
    question.textContent = musicQuiz[x].lyrics;
    answers.forEach(function(answer) {
      console.log(answer);
    });
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
 */
