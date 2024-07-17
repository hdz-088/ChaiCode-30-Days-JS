"use strict";

// Task-10: Write a higher order function that takes two functions and a value, applies the first function to the value, and then applies second function to the result.

let main = function (func1, func2, value) {
  return func1(func2(value));
};

let adder = function (n) {
  return n + 5;
};

let triple = function (n) {
  return n * 3;
};

console.log(main(adder, triple, 5));
