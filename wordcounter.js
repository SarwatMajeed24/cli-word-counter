#! /usr/bin/env node
//Import the "inquirer" module, whicis a command line inetrface for Node.js
import inquirer from "inquirer";
// Declare a constant "answers" and assign it to the result of inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "Sentence", // prperty     (type and value)
        type: "input",
        message: "Enter your sentence to count the word:",
    }
]);
//Declare variable and initialize with trim . it will be cut the sentence and split store value in array
const words = answers.Sentence.trim().split(" ");
// Print the array of words to the console 
console.log(words);
// Print the word count of the sentence to the console
console.log(`Your sentence word count is: ${words.length}`);
