//requiring our node modules and json files
var fs = require("fs");
var addCloze = require("./cloze.js");
var addBasic = require("./basic.js");
var runCloze = require("./run-cloze.js");
var runBasic = require("./run-basic.js");

//setting our command array
var command = (process.argv).slice(2);

//determining what module to run determining on what command is chosen
if (command[0] === 'run-cloze'){
   runCloze.askCloze();
} else if (command[0] === 'run-basic'){
    runBasic.askQuestion();
} else if (command[0] === 'add-cloze'){
    addCloze.createCloze();
} else if (command[0] === 'add-basic'){
    addBasic.createQuestion();
}