"use strict";

// Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

let num = 5;
let greet = "Hello World!";
let isDay = false;

let vehicle = {
  type: "sedan",
};

let arr = [1, 2, 3];

console.log(`Variable num is of ${typeof num} type and its value is ${num}`);
console.log(
  `Variable greet is of ${typeof greet} type and its value is ${greet}`
);
console.log(
  `Variable isDay is of ${typeof isDay} type and its value is ${isDay}`
);
console.log(
  `Variable vehicle is of ${typeof vehicle} type and its value is type: ${
    vehicle.type
  }`
);
console.log(`Variable arr is of ${typeof arr} type and its value is ${arr}`);
