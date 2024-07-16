"use strict";

// Task-03: Write a program to find the largest of three numbers using nested if-else statements.

let num1 = 10;
let num2 = 12;
let num3 = 5;

if (num1 > num2) {
  if (num1 > num3) {
    console.log(`${num1} is the biggest number`);
  } else {
    console.log(`${num3} is the biggest number`);
  }
} else if (num2 > num3) {
  console.log(`${num2} is the biggest`);
} else {
  console.log(`${num3} is the biggest`);
}
