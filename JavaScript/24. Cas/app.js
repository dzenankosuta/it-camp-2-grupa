//  JavaScript Number metode //

// toString() pretvara broj u string.
// Ova metoda pretvara bilo koji tip podatka u string.

let x = 22;
console.log(x);
console.log(typeof x);
let y = x.toString();
console.log(y);
console.log(typeof y);
console.log(y + x);

// toExponential() - nam vraca string broja, zaokruzen na onoliko decimala, koliki je argument metode.

let z = 55.4758;
let w = z.toExponential(2);
console.log(w);

let a = 12.1234;
let b = a.toExponential(3);
console.log(b);
console.log(typeof b);

// toFixed() - vraca string broja, koji ce biti zaokruzen na onoliko decimala koliki je zapravo argument.

a = 12.1234;
b = +a.toFixed(2);
console.log(b);
console.log(typeof b);

// toPrecision() metoda vraca string broja, sa onoliko cifara koliki je argument funkcije.

a = 12.1234;
b = +a.toPrecision(3);
console.log(b);
console.log(typeof b);

// valueOf() metoda vraca vrednost neke promenljive.

console.log(x.valueOf());

// Napomena.
// toString() i valueOf() metode vaze za sve tipove podataka u JavaScriptu.

// Napraviti funkciju koja prima jedan argument (broj) i vraca poruku da li je
// dati argument palindrom.

function isPalindrom(broj) {
  const stringBroja = broj.toString();
  let obrnutiBroj = "";
  for (let i = stringBroja.length - 1; i >= 0; i--) {
    obrnutiBroj += stringBroja[i];
  }
  if (stringBroja === obrnutiBroj) {
    return `Dati broj jeste palindrom.`;
  } else {
    return `Dati broj nije palindrom.`;
  }
}

console.log(isPalindrom(123));
console.log(isPalindrom(12321));

// 2. Napraviti funkciju koja ocekuje trocifren broj, a vraca dvocifren (iskljuci cifru desetice).

function izbrisiDruguCifru(broj) {
  const duzina = broj.toString().length;
  const stringBroja = broj.toString();
  if (duzina !== 3) {
    return `Argument mora imati 3 cifre.`;
  } else {
    const noviBroj = stringBroja.replace(stringBroja[1], "");
    return +noviBroj;
  }
}

console.log(izbrisiDruguCifru(4566));
console.log(izbrisiDruguCifru(6));
console.log(izbrisiDruguCifru(612));

// Global JavaScript methods //

// Globalne metode mogu biti primenjene na bilo koji tip podatka.

// Predstavicemo 3 najcesce koriscene metode sa brojevima.

// 1. Number() - vraca broj konvertovan iz argumenta.

console.log(Number("23")); // 23
console.log(typeof Number("23")); //  number

// Krajnji razmaci ne prave problem.
console.log(Number(" 23    ")); // 23

console.log(Number("23+5")); // NaN

// Razmaci nisu dozvoljeni kod Number() metode.
console.log(Number("23 56")); // NaN

console.log(Number("23,78")); // NaN

console.log(Number("23.78")); // 23.78

console.log(Number("adf")); // NaN

console.log(Number(true)); // 1

console.log(Number(false)); // 0

console.log(Number([])); // 0

console.log(Number({})); // NaN

// Domaci zadatak:
// Napraviti funkciju koja ocekuje cetvorocifren broj, a vraca broj kojem su zamenjene prva i treca cifra, kao i druga i cetvrta cifra.
// 4752
// 5247
