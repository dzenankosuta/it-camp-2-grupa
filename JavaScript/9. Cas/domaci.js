// Задатак: Фудбалски терен
// Фудбалски терен димензија d×s треба оградити правоугаоном оградом тако да је растојање страница ограде
// од линије терена r. Напиши програм који одређује дужину ограде.
// Улаз: У три реда стандардног улаза налазе се три цела броја:
// • d - дужина терена у метрима (90 ≤ d ≤ 120)
// • s - ширина терена у метрима (45 ≤ s ≤ 90)
// • r - растојање ограде од терена у метрима (2 ≤ r ≤ 10)

const duzina = +prompt("Unesite duzinu terena: ");
const sirina = +prompt("Unesite sirinu terena: ");
const rastojanje = +prompt("Unesite rastojanje od ivice terena i ograde: ");

if (isNaN(duzina) || isNaN(sirina) || isNaN(rastojanje)) {
  console.log("Unete vrednosti moraju biti brojevi.");
} else if (duzina < 90 || duzina > 120) {
  console.log("Duzina terena mora biti izmedju 90m i 120m.");
} else if (sirina < 45 || sirina > 90) {
  console.log("Sirina terena mora biti izmedju 45m i 90m.");
} else if (rastojanje < 2 || rastojanje > 10) {
  console.log("Rastojanje terena mora biti izmedju 2m i 10m.");
} else {
  const obimTerena = 2 * duzina + 2 * sirina;
  const obimOgrade = obimTerena + 8 * rastojanje;
  console.log("Potrebno je " + obimOgrade + "m za ogradjivanje terena.");
}

// 2.
// Korisnik unosi 2 broja:
// Na osnovu toga koji je broj manji, iteracija se vrsi od njega do veceg broja.
// Izracunati aritmeticku sredinu brojeva koji su deljivi sa 5.

let broj1 = +prompt("Unesite prvi broj: ");
const broj1ZaIspis = broj1;
let broj2 = +prompt("Unesite drugi broj: ");
const broj2ZaIspis = broj2;

let brojac = 0;
let suma = 0;
if (broj1 === broj2) {
  console.log("Uneti brojevi moraju biti razliciti.");
} else if (broj1 < broj2) {
  while (broj1 <= broj2) {
    if (broj1 % 5 === 0) {
      brojac++;
      suma += broj1;
    }
    broj1++;
  }
  console.log(
    "Aritmeticka sredina brojeva, od broja " +
      broj1ZaIspis +
      " do broja " +
      broj2 +
      " iznosi " +
      suma / brojac +
      "."
  );
} else if (broj1 > broj2) {
  while (broj2 <= broj1) {
    if (broj2 % 5 === 0) {
      brojac++;
      suma += broj2;
    }
    broj2++;
  }
  console.log(
    "Aritmeticka sredina brojeva, od broja " +
      broj2ZaIspis +
      " do broja " +
      broj1 +
      " iznosi " +
      suma / brojac +
      "."
  );
}

// 3.
// Korisnik unosi broj iz intervala [12,16).
// Na osnovu unetog broja, iteracija se vrsi od njega do 1(ukljucujuci).
// Ispisati svaki broj iz iteracije, nljegov kvadrat i vrednost broja umanjenu za 25.

let broj = Number(prompt("Unesite neki broj iz intervala [12,16)"));
const brojaZaPrikaz = broj;

for (broj; broj >= 1; broj--) {
  console.log(broj);
  console.log(broj ** 2);
  console.log(broj - 25);
}
