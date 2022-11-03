let recenica = "Danas cemo raditi neke operacije sa stringovima.";
console.log(recenica);
// console.log(typeof recenica);
let omar = "Omar";

// Pristupanje nekom karakteru stringa se vrsi preko indeksa.
// INDEKSIRANJE IDE OD NULE.
// U SVAKOM ITERIRAJUCEM OBJEKTU, POSLEDNJI KARAKTER IMA INDEX:
// (UKUPNA DUZINA STRINGA) - 1
console.log(omar[0]);
console.log(omar[2]);

// Metoda za dobijanje ukupne duzine stringa je length:
let duzinaRecenice = recenica.length;
console.log(duzinaRecenice);
console.log(omar.length);

// Primer. Svaki karakter neke recenice neka se ispise jedan ispod drugog.

// Kod ovakvih zadataka iterator predstavlja index pomocu kojeg pristupamo karakteru stringa.

recenica = "Danas cemo raditi neke operacije sa stringovima.";
const duzina = recenica.length;
for (let i = 0; i < duzina; i++) {
  console.log(recenica[i]);
}

// Na osnovu unete recine od strane korisnika ispisati recenicu tako da svaki karakter ide jedan ispod drugog. Dok ako je neki karakter = "a", neka se ispise broj 5. A u slucaju da je karakter jednak "s", neka se ne ispise nista.
