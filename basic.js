//requiring our node modules and JSON files
var fs = require("fs");
var inquirer = require("inquirer");
var question = require("./questions.json");

//creating our contructor function
function Questions(question, answer) {
    this.question = question;
    this.answer = answer;
};

//creating the prompt for our the user to create a function
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
        //creating a new question object
        var newQuestion = new Questions(
            response.question,
            response.answer);
        //pushing our function to our array
        question.push(newQuestion);
        console.log("Question Added!");
        //writing our question to our JSON file
        var addedQuestion = () => {
            fs.writeFile('questions.json', JSON.stringify(question, null, 2));
        };
        addedQuestion();
    });
}
//exporting our modules to app.js
module.exports = {
    createQuestion
}