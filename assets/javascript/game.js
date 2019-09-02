

var wordGuessArr = ["dashboard, Invisible"]
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

function Letter() {
    var letter = document.getElementById("letter").value;
    if (letter.length > 0) {
        for (var i = 0; i < wordGuess.length; i++) {
            if (wordGuess[i] === letter) { answerArray[i] = letter;
        }
    }
    count++;
    document.getElementById("counter").innerHTML = "No of clicks:" + count;
    document.getElementById("answer").innerHTML = answerArray.join(" ");
}
}