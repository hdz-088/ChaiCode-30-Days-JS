"use strict";

// Task-03: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let n = 0;
let sum = 0;

while (n <= 10) {
  sum += n;
  n++;
}

console.log(`Sum of numbers from 1 to 10 is ${sum}`);

// Task-04: Write a program to print numbers from 10 to 1 using a while loop.

let num = 10;

while (num > 0) {
  console.log(num);
  num--;
}
