// Napraviti funkciju koja vraca najveci element niza,
const brojevi = [-5, 6, 10, 45, 99, -44];

// I nacin

function maxEl(niz) {
  niz.sort((a, b) => b - a);
  return niz[0];
}
console.log(maxEl(brojevi));

// II nacin

console.log(Math.max.apply(null, brojevi));

// III nacin

function maxElement(niz) {
  let max = Number.NEGATIVE_INFINITY;
  for (let broj of niz) {
    if (broj > max) {
      max = broj;
    }
  }
  return max;
}

console.log(maxElement(brojevi));
