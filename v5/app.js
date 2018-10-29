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

var numSquares = 6;
var colors = [];
var squares = document.querySelectorAll(".possibleAnswers");
var pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var question = document.getElementById("question");
var possibleAnswers = document.querySelectorAll(".possibleAnswers");
var random = Math.floor(Math.random() * musicQuiz.length);
var showPossibleAnswers = musicQuiz[random].answers;

init();
function init() {
  setupModeButtons();
  setupSquares();
  reset();
}

function showQuestions() {
  for (var i = 0; i < musicQuiz.length; i++) {
    console.log(musicQuiz[i].lyrics);
    question.textContent = musicQuiz[random].lyrics;
    for (var j = 0; j < showPossibleAnswers.length; j++) {
      for (var x = j; x < possibleAnswers.length; x++) {
        possibleAnswers[x].innerHTML = showPossibleAnswers[j];
      }
    }
  }
}
showQuestions();

function setupModeButtons() {
  //mode buttons event listener
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);
      /*  if (this.textContent === "Easy") {
        numSquares = 3;
      } else {
        numSquares = 6;
      } */
      reset();
      //How many squares to sho
      //pick new colors
      //pick a new pickedColor
      //update page to reflect changes
    });
  }
}

function setupSquares() {
  for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares

    //add click listeners to squares
    squares[i].addEventListener("click", function() {
      //grab color of clicked squared
      var clickedColor = this.style.backgroundColor;
      //compare color to pickedColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct";
        resetButton.textContent = "Play Again";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function reset() {
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change color display to match picked color
  //colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  //change colors of squares
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function() {
  showQuestions();
  reset();
});

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
/* easyBtn.addEventListener("click", function() {
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function() {
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    squares[i].style.display = "block";
  }
});
 */
