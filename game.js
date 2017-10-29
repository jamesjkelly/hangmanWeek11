
var answer = [
    ["yankees", "mets", 'giants', 'rangers', 'knicks', 'nets', 'devils', 'cowboys'],
    ['aaron rodgers','Odell Beckham Jr',"jose reyes",'aaron judge','lebron james', 'eli manning', 'cc sabathia']
];


var randomCategory = function() {
    if (randomizeWord.categorySelect === answer[0]) {
        currentCategory = "teams";
    } else if (randomizeWord.chosenCategory === answer[1]) {
        currentCategory = "athletes";
    }
};
var randomizeWord = function(categorySelect, wordSelect) {
    this.categorySelect = answer[Math.floor(Math.random() * answer.length)];
    this.wordSelect = this.categorySelect[Math.floor(Math.random() * this.categorySelect.length)];
    if (this.categorySelect === answer[0]) {
        currentCategory = "Team";
    } else if (this.categorySelect === answer[1]) {
        currentCategory = "Player";
    }
};

module.exports = randomizeWord;