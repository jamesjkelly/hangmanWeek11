// dependencies
var auditWord = require('./word.js');
var randomizeWord = require('./game.js');
var inquirer = require('inquirer');

// function runs game
var startGame = function() {
    gameover = false;
    found = false;
    guesses = [];
    tries = 10;
    var word = new randomizeWord();
    randomWord = word.wordSelect;
    console.log("H-A-N-G-M-A-N T-I-M-E");
    console.log("\nTopics:", currentCategory);
    console.log("\nRemaining Guesses:", tries);
    currentWord = new auditWord(randomWord);
    currentWord.createBlanks();
    console.log("\n" + currentWord.render() + "\n");
    userPrompt();
};


// play again function
var playAgain = function() {
    if (gameover) {
        if (tries < 1) {
            console.log("\nwrong. sorry.\n");
        } else {
            console.log("\nwe have a winner.\n");
        }
        inquirer.prompt([{
            type: "confirm",
            name: "again",
            message: "want to play again?"
        }]).then(function(restart) {
            if (restart.again) {
                console.log("awesome!");
                startGame();
            } else {
                console.log("\nno problem.\n");
            }
        });
    }
};

// asks for user input
var userPrompt = function() {
    currentWord.wordFound();
    if (tries < 1 || found) {
        gameover = true;
        playAgain();
    } else {
        inquirer.prompt([{
            name: "guess",
            message: "enter a letter."
        }]).then(function(answers) {
            if (guesses.find(function(item) {
                    return item === answers.guess.toUpperCase();
                })) {
                console.log("\ntry a different letter.\n");
                userPrompt();
            } else {
                guesses.push(answers.guess.toUpperCase());
                console.log("\nguessed: " + guesses);
                letFound = currentWord.check(answers.guess);
                console.log("\nremaining guesses:", tries);
                console.log("\n" + currentWord.render() + "\n");
                userPrompt();
            }
        });
    }
};

startGame();