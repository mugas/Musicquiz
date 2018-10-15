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
    correctAnswer: 0
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
    correctAnswer: 3
  }
];
var question = document.getElementById("question");
var boxMusic = document.getElementsByClassName("boxMusic");
var test = document.getElementById("container");
for (var i = 0; i < musicQuiz.length; i++) {
  var random = Math.floor(Math.random() * musicQuiz.length);
  var teste = musicQuiz[random].answers;
  question.textContent = musicQuiz[random].lyrics;
  boxMusic.textContent = musicQuiz[0].answers;
}
for (var j = 0; j < musicQuiz.answers; j++) {
  console.log(teste);
}

//var boxMusic = document.querySelectorAll(".boxMusic");
var colors = generateRandomColors(6);
for (var i = 0; i < boxMusic.length; i++) {
  var boxMusic = document.querySelectorAll(".boxMusic");
  var q = [0, 1, 12, 3, 4, 5];
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
