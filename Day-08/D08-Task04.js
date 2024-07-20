"use strict";

// Task-04: Use object destructuring to extract the title and author from a book object and log them to the console.

const book = {
  title: "White Nights",
  author: "Fyodor Dostoevsky",
};

let { title, author } = book;

console.log(`Title: ${title}`);
console.log(`Author: ${author}`);
