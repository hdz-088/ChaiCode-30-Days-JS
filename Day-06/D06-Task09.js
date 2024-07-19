"use strict";

// Task-09: Use the `reduce` method to calculate the sum of all numbers in the array and log the result.

const arr = [1, 2, 3, 4, 5, 6];

let sum = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,0);

console.log(sum);
