"use strict";

// Task-07: Write a program to check if a year is leap year using multiple condition and log the result to console.

let year = 2024;

if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log(`${year} is a Leap Year`);
    } else {
      console.log(`${year} is not a Leap Year`);
    }
  } else {
    console.log(`${year} is a Leap Year`);
  }
} else {
  console.log(`${year} is not a Leap Year`);
}
