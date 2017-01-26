var fs = require("fs");
var inquirer = require("inquirer");
var cloze = require("./cloze.json");
var score = 0;

function Questions(question, clozeDeleted) {
    this.question = question;
    this.clozeDeleted = clozeDeleted;
};

var createCloze = function() {
    inquirer.prompt([
        {
            name: "question",
            message: "Please write your question:"
        }, {
            name: "clozeDeleted",
            message: "Please write the word you would like omitted:"
        }
    ]).then(function(response){
        
        var question = response.question;
        var replace = question.replace(response.clozeDeleted, '..........');

        var newQuestion = new Questions(
            replace,
            response.clozeDeleted);

        cloze.push(newQuestion);
        console.log("Cloze Question Added!");
        var addedQuestion = () => {
            fs.writeFile('cloze.json', JSON.stringify(cloze, null, 2));
        };
        addedQuestion();
    });
}
module.exports = {
    createCloze
}