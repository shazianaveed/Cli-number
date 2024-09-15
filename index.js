#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
// 1) computer willgenerate a random number
// 2)user input for guessing number
// 3)compare user input with computer generated number and show result - done
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber);
const answer = await inquirer_1.default.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        massage: "please guess a number between 1-6:",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("congtratulations! you guessed right number.");
}
else {
    console.log("you guessed wrong number");
}
