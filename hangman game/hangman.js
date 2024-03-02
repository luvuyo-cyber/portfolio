let words = ["javascript", "monkey", "amazing", "pancake"];
let word = words[Math.floor(Math.random() * words.length)];
let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_"; // underscores equal to secret word
}; // underscores loop

let remainingLetters = word.length;
let guess;
let lives = 5;
// main game loop
while (remainingLetters > 0 && lives > 0) {
    // show player progress
    alert(answerArray.join(" "));
    guess = prompt("guess a single letter or click 'cancel' to exit.\nyou have " + lives + " left!!");
    if (guess === null) {
        break;
    } else if (guess.length > 1) {
        alert("please guess a single letter only!");
    } else {
        guess = guess.toLowerCase();
        let correctGuesses = 0;
        for (let j = 0; j < word.length; j++) {
            if (guess === word[j]) {
                if (answerArray[j] === "_") {
                    answerArray[j] = guess;
                    correctGuesses++;
                    remainingLetters--;
                } else {
                    alert("you have already guessed the letter " + guess);
                };
                correctGuesses++;
                break;
            };

        };
        if (correctGuesses === 0) {
            lives--;
        };
    };
};
// after while loop
if (guess === null) {
    alert("sorry to see you leaving.\nthe answer was " + word);
} else if (remainingLetters === 0) {
    alert("congratulations! the word is " + word);
} else if (lives === 0) {
    alert("you ran out of lives. the correct word is " + word);
} else {
    alert("something went terribly wrong");
};