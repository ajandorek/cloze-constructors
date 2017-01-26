//requiring our node packages and JSON files
var fs = require("fs");
var inquirer = require("inquirer");
var question = require("./questions.json");

//setting our score and count variables
var score = 0;
var count = 0;

//creating our function for asking the user a question
var askQuestion = function() {
    
    //making sure are program closes when all questions are asked
    if (count < question.length){
        
        //our question prompt
        inquirer.prompt([
            {
                name: "question",
                message: question[count].question
            }
        ]).then(function(answers){
            //if the answer is correct the user will score a point
            if (answers.question === question[count].answer){
                score++;
                console.log(`-----------------------------`);
                console.log(`That's correct!`);
                console.log(`Current Score: ${score}`);
                console.log(`-----------------------------`);
            //if not, they will find out the answer and 
            } else {
                console.log(`-----------------------------`);
                console.log(`That's incorrect! The correct answer is ${question[count].answer}`);
                console.log(`Current Score: ${score}`);
                console.log(`-----------------------------`);
            }
            //adding to our count and going to the next question
            count++;
            askQuestion();
        });
    //if all questions are asked, show the user their score
    } else if (count > question.length - 1){
        console.log(`-----------------------------`);
        console.log(`All cards completed!`);
        console.log(`Your Score: ${score}`);
        console.log(`-----------------------------`);
    }
};
//exporting our function to app.js
module.exports = {
    askQuestion
}