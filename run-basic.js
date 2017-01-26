var fs = require("fs");
var inquirer = require("inquirer");
var question = require("./questions.json");
var score = 0;

var count = 0;

var askQuestion = function() {
    if (count < question.length){
        inquirer.prompt([
            {
                name: "question",
                message: question[count].question
            }
        ]).then(function(answers){
            if (answers.question === question[count].answer){
                score++;
                console.log(`-----------------------------`);
                console.log(`That's correct!`);
                console.log(`Current Score: ${score}`);
                console.log(`-----------------------------`);
            } else {
                console.log(`-----------------------------`);
                console.log(`That's incorrect! The correct answer is ${question[count].answer}`);
                console.log(`Current Score: ${score}`);
                console.log(`-----------------------------`);
            }
            count++;
            askQuestion();
        });
    } else if (count > question.length - 1){
        console.log(`-----------------------------`);
        console.log(`All cards completed!`);
        console.log(`Your Score: ${score}`);
        console.log(`-----------------------------`);
    }
};

module.exports = {
    askQuestion
}