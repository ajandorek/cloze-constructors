//requiring our node modules and JSON files
var fs = require("fs");
var inquirer = require("inquirer");
var cloze = require("./cloze.json");
var score = 0;

//creating our contructor function
function Questions(question, clozeDeleted) {
    this.question = question;
    this.clozeDeleted = clozeDeleted;
};

//creating the prompt for our the user to create a function
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
        //Checking if the response inputted is in the phrase
        if (question.indexOf(response.clozeDeleted) > -1){
            var replace = question.replace(response.clozeDeleted, '..........');
        } else {
            console.log('Please enter a word that is in the phrase');
            return 1;
        }
        
        //creating a new cloze object
        var newQuestion = new Questions(
            replace,
            response.clozeDeleted);

        cloze.push(newQuestion);
        console.log("Cloze Question Added!");
        //writing our file to our JSON file
        var addedQuestion = () => {
            fs.writeFile('cloze.json', JSON.stringify(cloze, null, 2));
        };
        addedQuestion();
    });
}

//exporting our function
module.exports = {
    createCloze
}