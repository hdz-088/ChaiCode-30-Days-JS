"use strict";

// Task-07: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

const product = function (a, b = 1) {
  return a * b;
};

console.log(`With Second Parameter: ${product(2, 3)}`);
console.log(`Without Second Parameter: ${product(2)}`);
