// Domaci zadaci:
// 1.
// Napisati program koji na osnovu dva uneta broja od strane korisnika ispisuje:
// Povrsinu kvadrata ako su uneti brojevi jednaki,
// Povrsinu pravougaonika ako su uneti brojevi razliciti.

// 2. Zadatak
// Korisnik unosi dva realna broja x i y. Napisati program koji izracunava i stampa
// kolicnik x/y, ako je broj y razlicit od nule,
// a inace ispisuje poruku: Deljenje je nemoguce.

// Za proveru da li je vrednost nekog broja NaN se koristi metoda:
// isNaN(vrednost)

// 1.
const prviBroj = Number(prompt("Unesite prvi broj: "));
const drugiBroj = +prompt("Unesite drugi broj: ");

if (isNaN(prviBroj) || isNaN(drugiBroj)) {
  console.log("Unete vrednosti moraju biti brojevi.");
} else if (prviBroj === drugiBroj) {
  console.log(
    "Povrsina kvadrata na osnovu unetih stranica iznosi " + prviBroj * drugiBroj
  );
} else if (prviBroj !== drugiBroj) {
  console.log(
    "Povrsina pravougaonika na osnovu unetih stranica iznosi " +
      prviBroj * drugiBroj
  );
}

// 2.
const x = Number(prompt("Unesite prvi broj: "));
const y = +prompt("Unesite drugi broj: ");

if (isNaN(x) || isNaN(y)) {
  console.log("Vrednosti moraju biti brojevi.");
} else if (y === 0) {
  console.log("Deljenje nulom nije moguce.");
} else {
  console.log("Kolicnik unetih brojeva je: " + x / y);
}
