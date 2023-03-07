// function divide(a, b) {
//   try {
//     if (b === 0) {
//       throw new Error("Deljenje nulom nije moguce.");
//     }
//     return a / b;
//   } catch (error) {
//     console.log(error.message);
//   } finally {
//     console.log("Ovo je bila funkcija koja deli dva broja.");
//   }
// }

// console.log(divide(10, 5));
// console.log(divide(10, 0));

console.log("1");
console.log("2");
setTimeout(() => {
  console.log("3");
}, 1000);
console.log("4");
setTimeout(() => {
  console.log("5");
}, 900);
