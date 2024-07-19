"use strict";

// Task-05: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

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
