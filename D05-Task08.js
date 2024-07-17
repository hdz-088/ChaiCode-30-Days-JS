"use strict";

// Task-08: Write a function that takes person's name and age and return a greeting message. Provide a default value for the age.

let message = (name, age = 19) => `Hello ${name}. Your age is ${age}`;

console.log(message("John", 25));
console.log(message("Jake"));
