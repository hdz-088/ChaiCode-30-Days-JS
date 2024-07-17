"use strict";

// Task-01: Write a function to check if a number is even or odd and log the result to the console.

let num = 5;

let oddEven = function (num) {
  return num % 2 === 0 ? "Even" : "Odd";
};

console.log(oddEven(num));
