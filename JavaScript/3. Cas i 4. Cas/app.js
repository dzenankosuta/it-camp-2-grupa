// 1. var
var x; // deklarisanje promenljive x (obezbedjivanje lokacijske memorije za promenljivu x)
x = 15; // inicijalizacija promenljive x (dodela vrednosti vec deklarisanoj promenljivoj x)
// var x = 15 - takodje dozvoljeno
console.log(x);

// Redeklarisanje promenljive x definisane putem var keyword je dozvoljeno,
// bilo gde u prostoru.
var x;
// Reinicijalizacija promenljive x definisane putem var keyword je dozvoljeno,
// bilo gde u prostoru.
x = 22;

// 2. let - Definisanje promenljive za koju postoji mogucnost promene vrednosti.
let y; // deklarisanje promenljive y (obezbedjivanje lokacijske memorije za promenljivu y)
y = 14; // inicijalizacija promenljive y (dodela vrednosti vec deklarisanoj promenljivoj y)
// let y = 14; - takodje dozvoljeno
console.log(y);

let a, b, c; // korektan nacin deklarisanja promenljivih

// Redeklarisanje promenljive definisane putem let keyword nije dozvoljeno
// ako se radi o istom prostoru.
// let y;

// Reinicijalizacija promenljive definisane putem let keyword je dozvoljeno
// u bilo kom prostoru.
y = 12;
console.log(y);

// Promenljive koje su definisane putem let ili const keyword nam obezbedjuju
// Block Scope.
{
  //   console.log(y); - prepoznaje se promenljiva iz Global Scope.
  //   Redeklaracija promenljive definisane putem let, u drugom prostoru je dozvoljena.
  let y = 19;
  console.log(y);
}
//  Ispisuje se 12, odnosno poslednje dodeljena vrednost unutar Global Scope.
console.log(y);

// 3. const
// Promenljive definisane putem const moreju biti odjednom deklarisane i inicijalizovane.
// const z;
// z = 26;
const z = 26;
console.log(z);

// NIJE DOZVOLJENA NI REDEKLARACIJA, NI REINICIJALIZACIJA.

// Redeklarisanje promenljive definisane putem const nije dozvoljeno,
// kada se radi o istom prostoru.
// const z = 23;

// Reinicijalizacija promenljive definisane putem const nije dozvoljena,
// kada se radi o istom prostoru.
// z = 23;
// console.log(z);

// Sve karakteristike koje vaze za promenljive definisane putem let keyword
// u Block Scope, vaze i za proemnljive definisane putem const keyword.
