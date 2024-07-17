"use strict";

// Task-09: Write a higher order function that takes a function and a number and calls the function that many times

let greet = function () {
  console.log("Hello World");
};

let repeater = function (n, func) {
  for (let i = 0; i < n; i++) {
    func();
  }
};

repeater(3, greet);
