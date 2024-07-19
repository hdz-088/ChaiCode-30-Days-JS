"use strict";

// Task-09: Use Object.keys and Object.values methods to log all the keys and values of the book object.

const book = {
  title: "White Nights",
  author: "Fyodor Dostoevsky",
  year: 1848,
};

// for(let key in book){
//     console.log(`${book[key]}: ${}`);
// }

console.log(Object.keys(book));
console.log(Object.values(book));
