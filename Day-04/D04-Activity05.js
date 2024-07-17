"use strict";

// Task-08: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

let n = 10;
let i = 1;

while (i < n) {
  if (i == 5) {
    continue;
  } else {
    console.log(i);
  }
  i++;
}

// Task-09: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

let num = 10;
let j = 1;

while (j < num) {
  if (j == 7) {
    break;
  } else {
    console.log(j);
  }
  j++;
}
