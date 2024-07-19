"use strict";

// Task-08: Use a `for... in` loop to iterate over the properties of the book object and log each property and its value.

const book = {
  title: "White Nights",
  author: "Fyodor Dostoevsky",
  year: 1848,
};

for (let key in book) {
  console.log(`${key}: ${book[key]}`);
}
