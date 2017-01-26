var fs = require("fs");
var inquirer = require("inquirer");
var cloze = require("./cloze.json");
var score = 0;

var count = 0;

var askCloze = function() {
    if (count < cloze.length){
        inquirer.prompt([
            {
                name: "question",
                message: cloze[count].question
            }
        ]).then(function(answers){
            if (answers.question === cloze[count].clozeDeleted){
                score++;
                console.log(`-----------------------------`);
                console.log(`That's correct!`);
                console.log(`Current Score: ${score}`);
                console.log(`-----------------------------`);
            } else {
                console.log(`-----------------------------`);
                console.log(`That's incorrect! The correct answer is ${cloze[count].clozeDeleted}`);
                console.log(`Current Score: ${score}`);
                console.log(`-----------------------------`);
            }
            count++;
            askCloze();
        });
    } else if (count > cloze.length - 1){
        console.log(`-----------------------------`);
        console.log(`All cards completed!`);
        console.log(`Your Score: ${score}`);
        console.log(`-----------------------------`);
    }
};

module.exports = {
    askCloze
}