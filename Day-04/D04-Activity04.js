"use strict";

// Task-07: Write a program to print a pattern using nested for loops

let n = 4;

for (let i = 1; i <= n; i++) {
  let string = "";
  for (let j = 1; j <= i; j++) {
    string += "*";
  }
  console.log(string);
}
