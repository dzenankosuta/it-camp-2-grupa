// Object built in Methods //

const person = {
  firstName: "Hamed",
  lastName: "Medjedovic",
  age: 16,
};

// Object.freeze(obj) metoda cini objekat nepromenljivim.
person.age = 17;
console.log(person);
// Object.freeze(person);
// person.age = 22;
// console.log(person);

// Object.seal(obj) cini objekat promenljivim s tim sto nema mogucnost dodavanja (brisanja) novih svojstava i metoda.
// Object.seal(person);
// person.age = 22;
console.log(person);
// delete person.age;
// console.log(person);

// Object.keys(obj) vraca niz kljuceva:
console.log(Object.keys(person));

// Object.entries(obj) vraca niz nizova:
// Svaki podniz je niz od dve elementa.
const entries = Object.entries(person);
console.log(entries);

const newArr = entries.flat().filter((element) => typeof element === "string");
console.log(newArr);

// Object.is(obj1, obj2)

const obj1 = {
  firstName: "Mitar",
  lastName: "Vranic",
};

const obj2 = {
  firstName: "Mitar",
  lastName: "Vranic",
};
const obj3 = obj1;

console.log(Object.is(obj1, obj2));
console.log(Object.is(obj1, obj3));

const ime = "Bakir";
const prezime = "Ujkanovic";
// const godine = 19;

const person2 = {
  ime,
  prezime,
  //   godine,
};
console.log(person2);

// Destructuring

const person3 = {
  firstName: "Hasan",
  lastName: "Mujanovic",
  age: 18,
};

// const firstName = person3.firstName;
// console.log(firstName);

const { firstName, age } = person3;
console.log(firstName);
console.log(age);

const godine = [
  { starost: 19 },
  { starost: 19 },
  { starost: 19 },
  { starost: 18 },
  { starost: 16 },
  { starost: 18 },
  { starost: 14 },
  { starost: 17 },
];
// Napraviti novi niz(punoletni) koji ce sadrzati one elemente (objekte) cija je starost veca od 17.

const punoletni = godine.filter((element) => element.starost > 17);
console.log(punoletni);

// Domaci:
//  1. Write a JavaScript program to sort an array of JavaScript objects:

const library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];
