"use strict";

class Person {
  constructor(name) {
    this.name = name;
    this.age = 12;
  }

  introduce() {
    return "My name is "+ this.name +". I am "+ this.age +" years old.";
  }
}

module.exports = Person;
