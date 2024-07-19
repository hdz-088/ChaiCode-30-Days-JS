"use strict";

// Task-06: Access and log the name of the library and the titles of all the books in the library.

const library = {
  name: "BookCorner",
  books: [
    {
      title: "The White Nights",
      author: "Fyodor Dostoevsky",
    },
    {
      title: "1984",
      author: "George Orwell",
    },
  ],
};

console.log(`Library: ${library.name}`);
console.log(`Available Books: `);
console.log(`- ${library.books[0].title} by ${library.books[0].author}`);
console.log(`- ${library.books[1].title} by ${library.books[1].author}`);
