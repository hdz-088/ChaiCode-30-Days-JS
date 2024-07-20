"use strict";

// Task-02: Create a multi-line string using template literals and log it to the console.

let course = "JavaScript";
let name = "John Doe";
let score = 84;
let isPass = true;

console.log(
  `Hello, ${name}. It is to inform you that you have achieved ${score} in your ${course} course. You are ${
    isPass ? "passed" : "failed"
  }`
);
