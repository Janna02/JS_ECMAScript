"use strict";

// Задание 1: ""Управление библиотекой книг""

// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  displayInfo() {
    console.log(`Title: ${this.title}
        Author: ${this.author}
        Pages: ${this.pages}\n`);
  }
}

const book1 = new Book("example1", "name1", 100);
const book2 = new Book("example2", "name2", 200);
const book3 = new Book("example3", "name3", 300);

book1.displayInfo();
book2.displayInfo();
book3.displayInfo();
