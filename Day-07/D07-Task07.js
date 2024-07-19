"use strict";

// Task-07: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

const library = {
  name: "BookCorner",
  books: [
    {
      title: "The White Nights",
      author: "Fyodor Dostoevsky",
      year: 1866,
    },
    {
      title: "1984",
      author: "George Orwell",
      year: 1949,
    },
  ],
  string: function (n) {
    return `${this.books[n].title} published in year ${this.books[n].year}`;
  },
};

console.log(`Library: ${library.name}`);
console.log(`Available Books: `);

for (let i = 0; i < library.books.length; i++) {
  console.log(library.string(i));
}