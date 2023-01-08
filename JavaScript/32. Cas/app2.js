// Sortiranje nizova //

const voce = ["jagoda", "banana", "kruska", "ananas", "jabuka", "kivi"];

// sort() metoda sortira niz abecedno.

// voce.sort();
// console.log(voce);

// reverse() metoda sortira niz obrnutim redosledom (u odnosu na prethodno stanje).

// voce.reverse();
// console.log(voce);

// Ako zelimo sortiranje (Z-A) moramo prvo izvrsiti sort(), pa onda reverse().

voce.sort();
voce.reverse();
console.log(voce);

const brojevi = [24, 36, -5, 22, -23, -55, 45, 99, -99];
const brojevi2 = ["21", "1000", "9"];

brojevi.sort();
console.log(brojevi);

brojevi2.sort();
console.log(brojevi2);

// sort() metoda sama ne vrsi ispravno sortiranje kad se radi o brojevima.
// Za resavanje datog problema se koristi callback funkcija unutar sort metoda.

// Funkcija koja se salje kao argument unutar neke druge funkcije se zova callback funkcija.

// Funkcija za poredjenje 2 broja:
// function poredjaj(a, b) {
//   return a - b;
// }

brojevi2.sort(function (a, b) {
  return a - b;
});
console.log(brojevi2);

brojevi.sort((a, b) => a - b);
console.log(brojevi);

brojevi.sort((a, b) => b - a);
console.log(brojevi);

// Ako zelimo da nas niz sortira brojeve random.
brojevi.sort(() => 0.5 - Math.random());
console.log(brojevi);

// Za dati niz izvrsiti:
// Sortiranje niza od najveceg ka najmanjem broju,
// Sortiranje niza od najmanjeg ka najvecem broju,
// Napraviti funkciju koja vraca najveci element niza,
// Napraviti funkciju koja vraca najmanji element niza (na 2 nacina).
// const niz = [-5, 6, 10, 45, 99, -44];
