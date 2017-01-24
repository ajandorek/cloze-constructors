var fs = require("fs");
var inquirer = require("inquirer");
var question = require("./questions.json");
var score = 0;

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
        var newQuestion = new Question(
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

// var count = 0;

// var askQuestion = function() {
//     if (count < 5){
//         inquirer.prompt([
//             {
//                 name: "question",
//                 message: question[count].front
//             }
//         ]).then(function(answers){
//             if (answers.question === question[count].back){
//                 score++;
//                 console.log(`-----------------------------`);
//                 console.log(`That's correct!`);
//                 console.log(`Current Score: ${score}`);
//                 console.log(`-----------------------------`);
//             } else {
//                 console.log(`-----------------------------`);
//                 console.log(`That's incorrect! The correct answer is ${question[count].back}`);
//                 console.log(`Current Score: ${score}`);
//                 console.log(`-----------------------------`);
//             }
//             count++;
//             askQuestion();
//         });
//     } else if (count > 5){
//         console.log(`-----------------------------`);
//         console.log(`All cards completed!`);
//         console.log(`Your Score: ${score}`);
//         console.log(`-----------------------------`);
//     }
// };
// askQuestion();