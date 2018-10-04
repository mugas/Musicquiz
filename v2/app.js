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
    ]
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
    ]
  }
];

for (var i = 0; i < musicQuiz.length; i++) {
  var question = document.getElementById("question");
  var random = Math.floor(Math.random() * musicQuiz[i].lyrics.length);
  question.textContent = musicQuiz[i].lyrics[random];
}

var boxMusic = document.querySelectorAll(".boxMusic");
var colors = generateRandomColors(6);
for (var i = 0; i < boxMusic.length; i++) {
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
