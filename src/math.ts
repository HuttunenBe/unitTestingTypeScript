"use strict";

export function sum(a: number, b: number): number {
  if (arguments.length < 2) {
    throw new Error("parameter missing");
  } // if fewer than two arguments are passed it throws an error
  // argument -> build in object. Hold all argument passed to function.

  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("only numbers allowed");
  } // error if either argument is not a number

  if (a < -500 || a > 500 || b < -500 || b > 500) {
    throw new Error("numbers not between -500 and 500");
  } // error if either number is outside of range

  return a + b;
  // return sum of numbers a + b if all checks pass
}

export default {
  sum,
};
