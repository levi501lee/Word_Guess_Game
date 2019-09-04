
var wordGuessArr = ["dashboard", "Anywhere"]
var wordGuess = wordGuessArr[Math.floor(Math.random() * wordGuessArr.length)];

var s;
var count = 0;
var answerArray = [];

function startUp() {
    for (var i = 0; i < wordGuess.length; i++) {
        answerArray[i] = '_';
    }

    s = answerArray.join(' ');
    document.getElementById('answer').innerHTML = s;
}
// GAME LOOP 
function Letter() {
    var letter = document.getElementById("letter").value;
    if (letter.length > 0) {
        for (var i = 0; i < wordGuess.length; i++) {
            if (wordGuess[i] === letter) {
            answerArray[i] = letter;
                {
                    var pic = document.createElement("IMG");
                    pic.setAttribute("src", "assets/images/hangmanYes.png");
                    pic.setAttribute("width", "304");
                    pic.setAttribute("height", "228");
                    pic.setAttribute("alt", "The Pulpit Rock");
                    document.body.appendChild(pic);
                };
            }
        }
    }
    count++;
    document.getElementById("counter").innerHTML = "No of clicks: " + count;
    document.getElementById("answer").innerHTML = answerArray.join(" ");
}
function Attempts() {
    var Attempts = count
}
var Remaining = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];


// var userText = document.getElementById("user-text");

//   document.onkeyup=function(event) {
//     userText.textContent = event.key;
//   };

//   var j;
//         for (j = 0; j < usedLetters.length; j++) {
//           var letterBtn = $("<button>");
//           letterBtn.addClass("letter-button letter letter-button-color")
//           letterBtn.attr("data-letter", usedLetters[j])
//           letterBtn.text(usedLetters[j])
//           $("#buttons").append(letterBtn)}
              // else if (wordGuess.length !== 1){
    //     for (var j = 0; j < wordGuess.length; j++) {
    //     alert("One letter at a time, speedy"); input.value = ""
