"use strict";

// Task-03: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

const library = {
  title: "Crime and Punishment",
  author: "Fyodor Dostoevsky",
  year: 1866,
  output: function () {
    return `This book's title is ${this.title}, it is written by ${this.author} and it is published in ${this.year}`;
  },
};

console.log(library.output());
