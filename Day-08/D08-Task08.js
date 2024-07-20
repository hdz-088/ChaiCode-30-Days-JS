"use strict";

// Task-08: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

const title = "To Kill a Mockingbird";
const author = "Harper Lee";

const library = {
  name: "City Library",
  location: "Main Street",
  books: [
    { title, author },
    { title: "1984", author: "George Orwell" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  ],
  getBookTitles() {
    return this.books.map((book) => book.title).join(", ");
  },
  ["libraryInfo"]: function () {
    return `${this.name} located at ${this.location}`;
  },
};

console.log(library.getBookTitles());
console.log(library.libraryInfo());
