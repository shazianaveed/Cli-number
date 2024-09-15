#! /usr/bin/env node

import inquirer from "inquirer";
// 1) computer willgenerate a random number
// 2)user input for guessing number
// 3)compare user input with computer generated number and show result - done

const randomNumber = Math.floor (Math.random() * 6 +1);
console.log(randomNumber);


 const answer = await inquirer.prompt([
     {
 name: "userGuessedNumber",
 type: "number",
 massage:"please guess a number between 1-6:",

},

 ]);
if (answer.userGuessedNumber === randomNumber){
     console.log("congtratulations! you guessed right number.")
 }else {
     console.log("you guessed wrong number")
 }



