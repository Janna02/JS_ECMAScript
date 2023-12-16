"use strict";

// Задание 2: ""Управление списком студентов""
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).

class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  displayInfo() {
    console.log(`Name: ${this.name}
        Age: ${this.age}
        Grade: ${this.grade}\n`);
  }
}

const student1 = new Student("name1", 15, "grade 9");
student1.displayInfo();

const student2 = new Student("name2", 16, "grade 11");
student2.displayInfo();

const student3 = new Student("name3", 17, "grade 11");
student3.displayInfo();
