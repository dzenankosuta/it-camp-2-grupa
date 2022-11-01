// Prebrojati i sabrati brojeve deljive sa 5 u intervalu od 1 do n.

const n = +prompt("Unesite neki prirodan broj: ");
let brojac = 0;
let suma = 0;
for (let broj = 1; broj <= n; broj++) {
  if (broj % 5 === 0) {
    brojac++;
    suma += broj;
  }
}
console.log(
  "Ukupno ima " +
    brojac +
    " brojeva koji su deljivi sa 5, \na njihova suma je: " +
    suma +
    "."
);

// Neka se izvrsi iteracija od broja 99 do -99.
// Ispisati zbir broja deljivog sa 4 i broja 14.

for (let i = 99; i >= -99; i--) {
  if (i % 4 === 0) {
    console.log(i + 14);
  }
}

let iterator = 99;
while (iterator > -100) {
  if (iterator % 4 === 0) {
    console.log(iterator + 14);
  }
  iterator--;
}

// Izracunati aritmeticku sredinu brojeva koji su deljivi sa 3.
// Iteracija se vrsi od 3 do 17.
let number = 3;
let counter = 0;
let sum = 0;
while (number < 18) {
  if (number % 3 === 0) {
    counter++;
    sum += number;
  }
  number++;
}
console.log(
  "Aritmeticka sredina deljivih brojeva sa 3, iz intervala [3, 17] je: " +
    sum / counter
);

// Задатак: Фудбалски терен
// Фудбалски терен димензија d×s треба оградити правоугаоном оградом тако да је растојање страница ограде
// од линије терена r. Напиши програм који одређује дужину ограде.
// Улаз: У три реда стандардног улаза налазе се три цела броја:
// • d - дужина терена у метрима (90 ≤ d ≤ 120)
// • s - ширина терена у метрима (45 ≤ s ≤ 90)
// • r - растојање ограде од терена у метрима (2 ≤ r ≤ 10)

// Domaci zadaci:
// 1.
// Korisnik unosi 2 broja:
// Na osnovu toga koji je broj manji, iteracija se vrsi od njega do veceg broja.
// Izracunati aritmeticku sredinu brojeva koji su deljivi sa 5.

// 2.
// Korisnik unosi broj iz intervala [12,16).
// Na osnovu unetog broja, iteracija se vrsi od njega do 1(ukljucujuci).
// Ispisati svaki broj iz iteracije, nljegov kvadrat i vrednost broja umanjenu za 25.
