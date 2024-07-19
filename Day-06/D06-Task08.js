"use strict";

// Task-08: Use the `filter` method to create a new array with only odd and even numbers and log the new array.

const arr = [1, 2, 3, 4, 5, 6];

const even = arr.filter((num) => num % 2 === 0);
const odd = arr.filter((num) => num % 2 !== 0);

console.log(`Array of Odd: ${odd}`);
console.log(`Array of Even: ${even}`);
