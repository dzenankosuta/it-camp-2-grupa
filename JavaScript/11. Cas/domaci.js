// Domaci zadatak.
// 1.	Prebrojati koliko se puta u unetom stringu pojavljuje slovo "M" (i veliko i malo). Npr. za string 'Mama ima momu', dobija se rezultat 5.

// 2.	Prebrojati koliko ima znakova koji su cifre u unetom stringu.

const recenica = prompt("Unesite neki string: ");
let brojac = 0;
let i = 0;
while (i < recenica.length) {
  if (recenica[i] === "m" || recenica[i] === "M") {
    brojac++;
  }
  i++;
}
console.log(brojac);

let brojac2 = 0;
const recenica2 = prompt("Unesite neki string: ");
for (let i = 0; i < recenica2.length; i++) {
  if (isNaN(recenica2[i])) {
    continue;
  } else {
    brojac2++;
  }
}
console.log(brojac2);
