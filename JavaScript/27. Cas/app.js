// Nastavak Math metoda //
// Math.min() nam vraca najmanji broj od poslatih. Argumenata moze imati neograniceno.

console.log(Math.min(45, 54, 66, -66, 99, 35, -19));

// Math.max() nam vraca najveci broj od poslatih. Argumenata moze imati neograniceno.

console.log(Math.max(45, 54, 66, -66, 99, 35, -19));

// Primena kod nizova:
const najmanji = Math.min.apply(null, [19, 55, 33]);
console.log(najmanji);

// Math.random() nam daje broj izmedju 0(ukljucujuci) i 1(nije ukljucena).
console.log(Math.random());

// Broj izmedju 0 i 1:

const broj = Math.round(Math.random());
console.log(broj);

// Broj izmedju 0 i 5(ukljucujuci):

const broj2 = Math.round(Math.random() * 5);
console.log(broj2);

// Broj izmedju 50 i 100(ukljucujuci):
// mnozimo sa brojem koliki ce opseg zapravo biti, a dodajemo broj koji predstavlja pocetnu vrednost iz opsega.
const broj3 = Math.round(Math.random() * 50 + 50);
console.log(broj3);

// Math.log(x)  - vraca vrednost logaritma broja x za osnovu e
// Math.log2(x) - vraca vrednost logaritma broja x za osnovu 2
// Math.log10(x) - vraca vrednost logaritma broja x za osnovu 10

console.log(Math.log(0.36));
console.log(Math.log2(1.5));
console.log(Math.log10(10));

// Zadatak:
// Izracunati rastojanje izmedu dve tacke u prostoru ako su zadate koordinate krajnjih tacaka.

const rastojanje = (x1, y1, x2, y2) => {
  const rastojanje = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  return rastojanje;
};

console.log(rastojanje(1, 1, 4, 5));

// Bolji u dve discipline.
function bolji(m1, p1, m2, p2) {
  const poeni1 = m1 + p1;
  const poeni2 = m2 + p2;
  if (poeni1 < poeni2) {
    return `Pobednik je 2. takmicar.`;
  } else if (poeni1 > poeni2) {
    return `Pobednik je 1. takmicar.`;
  } else {
    if (p2 > p1) {
      return `Pobednik je 2. takmicar.`;
    } else {
      return `Pobednik je 1. takmicar.`;
    }
  }
}

console.log(bolji(40, 30, 40, 30));
console.log(bolji(35, 30, 40, 25));
console.log(bolji(35, 30, 40, 30));

//  Write a JavaScript function to get the greatest common divisor (NZD) of two integers.

const NZD = (a, b) => {
  // const manji = a < b ? a : b
  let manji = Math.min(a, b);
  let zeljeniBroj;
  while (manji >= 1) {
    if (a % manji === 0 && b % manji === 0) {
      zeljeniBroj = manji;
      break;
    }
    manji--;
  }
  return zeljeniBroj;
};

console.log(NZD(10, 15));
console.log(NZD(5, 10));
console.log(NZD(4, 9));
// NZD

// Domaci zadatak.
// Write a JavaScript function to get the least common multiple (NZS) of two numbers.
