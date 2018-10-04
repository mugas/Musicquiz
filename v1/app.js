function Question(question, answer, correct) {
  this.question = question;
  this.answer = answer;
  this.correct = correct;
}
var quiz = document.getElementById("question");
Question.prototype.displayQuestion = function() {
  console.log(this.question);
  console.log(this.answer);
};

var q1 = new Question(
  "Now the drugs don´t work",
  [
    "The Verve",
    "Oasis",
    "Adele",
    "Rolling Stones",
    "Chris de Burgh",
    "Ceasars"
  ],
  0
);

var q2 = new Question(
  "Go your own way",
  [
    "The Chemical Brothers",
    "U2",
    "The Doors",
    "Fleetwood Mac",
    "Moloko",
    "The Beatles"
  ],
  3
);

var q3 = new Question(
  "It's now or never",
  [
    "Radiohead",
    "A-Ha",
    "Mac Davis",
    "Rückwater",
    "Queens of the Stone Age",
    "Elvis Presley"
  ],
  5
);
var q4 = new Question(
  "It's now or never",
  [
    "Radiohead",
    "A-Ha",
    "Mac Davis",
    "Rückwater",
    "Queens of the Stone Age",
    "Elvis Presley"
  ],
  5
);
var q5 = new Question(
  "It's now or never",
  [
    "Radiohead",
    "A-Ha",
    "Mac Davis",
    "Rückwater",
    "Queens of the Stone Age",
    "Elvis Presley"
  ],
  5
);
var q6 = new Question(
  "It's now or never",
  [
    "Radiohead",
    "A-Ha",
    "Mac Davis",
    "Rückwater",
    "Queens of the Stone Age",
    "Elvis Presley"
  ],
  5
);
var questions = [q1, q2, q3, q4, q5, q6];

function nextQuestion() {
  var n = Math.floor(Math.random() * questions.length);

  quiz.textContent = questions[n].displayQuestion();
}

nextQuestion();

var boxMusic = document.querySelectorAll(".boxMusic");
var colors = generateRandomColors(6);
for (var i = 0; i < boxMusic.length; i++) {
  boxMusic[i].textContent = questions[i].question;
  boxMusic[i].style.backgroundColor = colors[i];
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

/* var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay"); 
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  //add click listeners to squares
  squares[i].addEventListener("click", function() {
    //grab color of clicked squared
    var clickedColor = this.style.backgroundColor;
    //compare color to pickedColor
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

function changeColors(color) {
  //loop trough all squares
  for (var i = 0; i < squares.length; i++) {
    //change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
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
