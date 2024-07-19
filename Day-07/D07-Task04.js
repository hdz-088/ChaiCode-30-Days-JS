"use strict";

// Task-04: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

const library = {
  title: "Crime and Punishment",
  author: "Fyodor Dostoevsky",
  year: 1866,
  yearUpdate: function (updatedYear) {
    this.year = updatedYear;
  },
};

library.yearUpdate(1867);
console.log(library.year);
