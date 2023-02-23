// Izvrsice se deklaracija na vrhu (hoisting).
myFunc();

function myFunc() {
  console.log("Hi");
}

// Nece se izvrsiti deklaracija na vrhu (hoisting).
// myFunc2();

// const myFunc2 = () => {
//   console.log("Arrow");
// };

// Nece se izvrsiti deklaracija na vrhu (hoisting) ako imamo funkcije koje smo definisali preko nekih promenljivih (nije bitan nacin definisanja).
// a();
// const a = function (a, b) {
//   console.log(a + b);
// };

// b();
// let b = function (a, b) {
//   console.log(a + b);
// };

// c();
// var c = function (a, b) {
//   console.log(a + b);
// };
