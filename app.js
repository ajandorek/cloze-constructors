var fs = require("fs");
var addCloze = require("./cloze.js");
var addBasic = require("./basic.js");
var runCloze = require("./run-cloze.js");
var runBasic = require("./run-basic.js");

var command = (process.argv).slice(2);

if (command[0] === 'run-cloze'){
   runCloze.askCloze();
} else if (command[0] === 'run-basic'){
    runBasic.askQuestion();
} else if (command[0] === 'add-cloze'){
    addCloze.createCloze();
} else if (command[0] === 'add-basic'){
    addBasic.createQuestion();
}