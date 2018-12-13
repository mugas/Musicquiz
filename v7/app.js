function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.QuestionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
  return this.questions[this.QuestionIndex];
};

Quiz.prototype.isEnded = function() {
  return this.questions.length === this.QuestionIndex;
};

Quiz.prototype.guess = function(answer) {
  if (this.getQuestionIndex().correctAnswer(answer)) {
    this.score++;
  }
  this.QuestionIndex++;
};

function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

Question.prototype.correctAnswer = function(choice) {
  return choice === this.answer;
};

function populate() {
  if (quiz.isEnded()) {
    showScores();
  } else {
    //show question
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;
    //show choices
    var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
      var element = document.getElementById("choice" + i);
      element.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }
    showProgress();
  }
}

function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function() {
    quiz.guess(guess);
    populate();
  };
}

function showProgress() {
  var currentQuestionNumber = quiz.QuestionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML =
    "Question" + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores() {
  var message = document.querySelector("#message");

  if (quiz.score >= 1 && quiz.score <= 2) {
    message.textContent = "You can do better";
  } else if (quiz.score > 2 && quiz.score <= 4) {
    message.textContent = "You know your music";
  } else if (quiz.score === 5) {
    message.textContent = "You are a wizard of music";
  } else {
    message.textContent = "Do you even listen to music?";
  }
}

var questions = [
  new Question(
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
  new Question(
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
  new Question(
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
  new Question(
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
  new Question(
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

var quiz = new Quiz(questions);
populate();

var agora = document.querySelector(".restart");

/* agora.addEventListener("click", function() {
  location.reload();
}); */

function restart() {
  location.reload();
}
agora.addEventListener("click", restart);

//Random Color

var colors = generateRandomColors(6);
var buttons = document.querySelectorAll(".button");
//var pickedColor = pickColor();
/* 
 buttons.forEach(function(color) {
  buttons[i].style.backgroundColor = colors[i];
  console.log(color);
});  */
 
 for(var i = 0;i < buttons.length; i++){
  
  buttons[i].style.backgroundColor = colors[i];
}   



function pickColor(){
 var random  = Math.floor(Math.random() * colors.length)
 return colors[random];
} 

function generateRandomColors(num){
  //make an array
  var arr=[];
  //repeat num times
  for (var i = 0; i < num; i++){
    arr.push(randomColor());
  }
  return arr;
}

function randomColor(){
  //pick a red from 0 -255
  var r =Math.floor(Math.random() * 256);
  //pick a green from 0-255
  var g =Math.floor(Math.random() * 256);
  //pick a blue from 0-255
  var b =Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + g + "," + b + ")";

}