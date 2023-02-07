//  Zadatak
// Complete the code for the squareList function using any combination
// of map(), filter(), and reduce(). The function should return a new array
//  containing the squares of only the positive integers
//  (decimal numbers are not integers) when an array of real numbers is passed to it.
//   An example of an array of real numbers is
const numbers = [-3, 4.8, 5, 3, -3.2];

const squaresPositiveIntegers = (arr) => {
  const squares = arr
    .filter((element) => element > 0 && element % 1 === 0)
    .map((br) => br ** 2);
  return squares;
};

// Da bi neki broj bio ceo, ostatak pri deljenju tog broja sa 1 mora biti 0.
console.log(4.8 % 1);
console.log(4 % 1);
console.log(squaresPositiveIntegers(numbers));

// Postoji built-in metoda u JavaScriptu koja proverava da li je neki broj Integer (ceo):
// Number.isInteger()

// 2.
// We have an array of objects representing different people in our contacts lists.
// A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.
// The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
// If both are true, then return the "value" of that property.
// If name does not correspond to any contacts then return the string No such contact.
// If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

const isNameAndProperty = (name, property, arr) => {
  const element = arr.find((element) => {
    const keys = Object.keys(element);
    return element.firstName === name && keys.includes(property);
  });
  if (element) {
    return element[property];
  } else {
    return `No such contact.`;
  }
};
console.log(isNameAndProperty("Hamed", "hobby", contacts));
console.log(isNameAndProperty("Sherlock", "likes", contacts));
console.log(isNameAndProperty("Sherlock", "hobby", contacts));
