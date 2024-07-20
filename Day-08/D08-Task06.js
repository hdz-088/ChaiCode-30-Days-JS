"use strict";

// Task-06: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

const arr = [1, 2, 3, 4, 5];

const adder = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

console.log(adder(...arr));
