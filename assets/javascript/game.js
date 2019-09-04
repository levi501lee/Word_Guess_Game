
// These are the words that could occur
var words = ["dashboard", "everywhere", "coyotes", "invisible",]

var word = [];
var answerArray = [];
var blanks = 0;
var Correct = [];
var wrongGuess = [];

var guessesRemaining = 9;
var wins = 0;
var losses = 0;

function startUp() {
    // This will randomly select one of the words
    //  ********* SOMETHING IS MAKING IT DOUBLE UP ON THE FIRST TRY!!!!
    word = words[Math.floor(Math.random() * words.length)];
    answerArray = word.split("");
    blanks = answerArray.length;

    for (var i = 0; i < blanks; i++) {
        Correct.push("_");
    }

    document.getElementById("currentWord").innerHTML = " " + Correct.join(" ");
    // document.getElementById("picture").src = "./assets/images/modestMouse.jpg"
    console.log(words);
    console.log(word);
    console.log(blanks);
}


function img() {
    //Dashboard & Image
    //---------------------------
    if (word === words[0]) {
        document.getElementById("picture").src = "./assets/images/dashboard.jpg";
    }
    // Anywhere & Image
    else if (word === words[1]) {
        document.getElementById("picture").src = "./assets/images/everywhere.jpg";
    }
    // Coyotes & Image
    else if (word === words[2]) {
        document.getElementById("picture").src = "./assets/images/coyotes.jpg";
    }
    // Invisible & Image
    else if (word === words[3]) {
        document.getElementById("picture").src = "./assets/images/invisible.jpg";
    }
}

function reset() {
    guessesRemaining = 9;
    wrongGuess = [];
    Correct = [];
    startUp();
}

function checkLetters(letter) {
    var answerArray = false;
    //if the selected word is equal to the letter it's true
    for (var i = 0; i < blanks; i++) {
        if (word[i] == letter) {
            answerArray = true;
        }
    }
    //if letter is correct
    if (answerArray) {
        //check each letter to see if it matches word
        for (var i = 0; i < blanks; i++) {
            if (word[i] == letter) {
                Correct[i] = letter;
                document.getElementById("picture").src = "assets/images/hangmanYes.png";
            }
        }
    }
    //I want to be able to put the guessed letter in the images for lulz, but I'm running out of time
    else {
        wrongGuess.push(letter);
        guessesRemaining--;
        document.getElementById("picture").src = "assets/images/hangmanNo.png"
    }
    if (guessesRemaining < 7) {
        document.getElementById("picture").src = "assets/images/hangmanBad.png"
    }
    if (guessesRemaining < 6) {
        document.getElementById("picture").src = "assets/images/hangmanUpset.png"
    }

}

console.log(Correct);

function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)

    //if WON...display image 
    if (answerArray.toString() == Correct.toString()) {
        wins++;
        img()
        reset()
        //display wins on screen
        document.getElementById("winstracker").innerHTML = " " + wins;

        //if LOST...then show try again image
    } else if (guessesRemaining === 0) {
        losses++;
        reset()
        document.getElementById("image").src = "./assets/images/try-again.jpg"
        document.getElementById("losstracker").innerHTML = " " + losses;
    }
    //display losses on screen && guesses remaining countdown
    document.getElementById("currentWord").innerHTML = "  " + Correct.join(" ");
    document.getElementById("guessesRemaining").innerHTML = " " + guessesRemaining;
}
startUp()
document.getElementById("picture").src = "assets/images/hangmancolor.png"
document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(guesses);
    complete();
    console.log(guesses);

    document.getElementById("playerGuesses").innerHTML = "  " + wrongGuess.join(" ");
}
    // function Attempts() {
    //     var Attempts = count
    //     var Remaining = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
    // }

// GAME LOOP 
// function Letter() {
//     var letter = document.getElementById("letter").value;
//     if (letter.length > 0) {
//         for (var i = 0; i < words.length; i++) {
//             if (words[i] === letter) {
//                 answerArray[i] = letter;
                //     {
                //         var pic = document.createElement("IMG");
                //         pic.setAttribute("src", "assets/images/hangmanYes.png");
                //         pic.setAttribute("width", "304");
                //         pic.setAttribute("height", "228");
                //         pic.setAttribute("alt", "Hangman Yes");
                //         document.body.appendChild(pic);
                //     };
                // }

                // else if (words[i] !== letter) {
                //     wrongGuess[i] = letter; {
                //         var pic = document.createElement("IMG");
                //         pic.setAttribute("src", "assets/images/hangmanNo.png");
                //         pic.setAttribute("width", "304");
                //         pic.setAttribute("height", "228");
                //         pic.setAttribute("alt", "Hangman No");
                //         document.body.appendChild(pic);
                //     }
    //         // }
    //         count++;
    //         document.getElementById("counter").innerHTML = "No of clicks: " + count;
    //         // document.getElementById("GuessesRemaining").innerHTML = "Guesses Remaining:" - count;
    //         document.getElementById("answer").innerHTML = answerArray.join(" ");
    //         document.getElementById("playerGuesses").innerHTML = "  " + wrongGuess.join(" ");

    //     }
    // }



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
              // else if (words.length !== 1){
    //     for (var j = 0; j < words.length; j++) {
    //     alert("One letter at a time, speedy"); input.value = ""
