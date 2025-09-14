'use strict';

import Dice from './dice';

const diceA: Dice = new Dice();
const diceB: Dice = new Dice();
// two dice objects default bound 6

console.log(`diceA: ${diceA}, diceB: ${diceB}`); // log current state 
diceA.roll(); //roll both dice 
diceB.roll();
console.log(`diceA: ${diceA}, diceB: ${diceB}`); // return change 

if (diceA.dots > diceB.dots) {
    console.log('A wins');
} else if (diceB.dots > diceA.dots) {
    console.log('B wins');
} else {
    console.log('Nobody wins');
} // log win

console.log('########################'); // separator for console output 

const diceArray: Dice[] = [new Dice(), new Dice(), new Dice()];
// create array from three dice objest 

diceArray.forEach((dice) => console.log(dice.toString())); // print initial state for all 3
diceArray.forEach((dice) => dice.roll()); // roll each one 
diceArray.forEach((dice) => console.log(dice.toString())); // pring the result 
