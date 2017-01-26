var fs = require("fs");
var inquirer = require("inquirer");
var question = require("./questions.json");

function Questions(question, answer) {
    this.question = question;
    this.answer = answer;
};

var createQuestion = function() {
    inquirer.prompt([
        {
            name: "question",
            message: "Please write your question:"
        }, {
            name: "answer",
            message: "Please write the answer to your question:"
        }
    ]).then(function(response){
        var newQuestion = new Questions(
            response.question,
            response.answer);
        question.push(newQuestion);
        console.log("Question Added!");
        var addedQuestion = () => {
            fs.writeFile('questions.json', JSON.stringify(question, null, 2));
        };
        addedQuestion();
    });
}
module.exports = {
    createQuestion
}