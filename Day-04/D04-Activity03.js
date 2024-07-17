"use strict";

// Task-05: Write a program to print numbers from 1 to 5 using a do...while loop.

let n = 1;

do {
  console.log(n);
  n++;
} while (n <= 5);

// Task-06: Write a program to calculate the factorial of a number using a do...while loop.

let fact = 1;
let i = 1;
let num = 5;

do {
  fact *= i;
  i++;
} while (i <= num);

console.log(`${num}! : ${fact}`);
