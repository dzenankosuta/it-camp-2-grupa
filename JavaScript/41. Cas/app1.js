// JSON - JavaScript Object Notation //

// JSON je format za skladistenje i prenos podataka.
// Najcesce se koristi kada se podaci salju sa servera ka WEB stranici.

// JSON podaci su vrslo slicni JavaScript objektu i oni se zapisuju:

// const person = {
//   "firstName": "Amer",
//   "lastName": "Honic",
//   "age": 19,
// };

// keys/names zahtevaju duple navodnike, za razliku od JavaScript objekta.

const person = {
  firstName: "Amer",
  lastName: "Honic",
  age: 19,
};

// Dve metode za pretvaranje:
// 1. JSON.stringify()
// JSON.stringify() pretvara nas objekat u JSON format pa JSON u string.
// Koristi se za slanje podataka..
const strObject = JSON.stringify(person);
console.log(strObject);
console.log(typeof strObject);
// 2. JSON.parse()
// Analizira se neki string i u slucaju mogucnosti pretvara u objekat (nama citljiv podatak).
const obj = JSON.parse(strObject);
console.log(obj);