//requiring our node packages and JSON files
var fs = require("fs");
var inquirer = require("inquirer");
var cloze = require("./cloze.json");

//setting the score and question count to 0
var score = 0;
var count = 0;

//running the code for our ask cloze function
var askCloze = function() {
    
    //making sure are program closes when all questions are asked
    if (count < cloze.length){
        
        //our question prompt
        inquirer.prompt([
            {
                name: "question",
                message: cloze[count].question
            }
        ]).then(function(answers){
            //if the answer is correct the user will score a point
            if (answers.question === cloze[count].clozeDeleted){
                score++;
                console.log(`-----------------------------`);
                console.log(`That's correct!`);
                console.log(`Current Score: ${score}`);
                console.log(`-----------------------------`);
            //if not, they will find out the answer and 
            } else {
                console.log(`-----------------------------`);
                console.log(`That's incorrect! The correct answer is ${cloze[count].clozeDeleted}`);
                console.log(`Current Score: ${score}`);
                console.log(`-----------------------------`);
            }
            //adding to our count and going to the next question
            count++;
            askCloze();
        });
    //if all questions are asked, show the user their score
    } else if (count > cloze.length - 1){
        console.log(`-----------------------------`);
        console.log(`All cards completed!`);
        console.log(`Your Score: ${score}`);
        console.log(`-----------------------------`);
    }
};

//exporting our function to app.js
module.exports = {
    askCloze
}