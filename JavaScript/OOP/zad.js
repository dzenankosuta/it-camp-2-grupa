class Course {
  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
  }
}

const course1 = new Course("IT Camp", 9, 100);
const course2 = new Course("OOP", 2, 80);
console.log(course1);
console.log(course2);
