// Ispisati prvih deset brojeva u konzoli, jedan ispod drugog.
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

// Petlja(LOOP) predstavlja nacin da se neki kod izvrsi (uz odredjene uslove)
// vise puta.

// for petlja - Sintaksa:

// for (statement1; statement2; statement3) {
//   kod za izvrsavanje u svakoj iteraciji
// }

// statement1 predstavlja definisanje promenljive koja predstavlja iterator.
// statement2 predstavlja uslov (granicu) do koje vrednosti ce iterator da ide.
// statement3 predstavlja povecanje (smanjenje) iteratora koje se desi kraju svake iteracije.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Ispisati brojeve od 1 do 10, izuzev broja 2 i broja 5.

// I nacin
for (let i = 1; i < 11; i++) {
  if (i !== 2 && i !== 5) {
    console.log(i);
  }
}

// continue keyword (rezervisana rec) ako se nadje u nekoj iteraciji, zapravo
// oznacava da se ta iteracija zanemari i da se nastavi dalje sa sledecom.

// II nacin
for (let i = 1; i < 11; i++) {
  if (i === 2 || i === 5) {
    continue;
  } else {
    console.log(i);
  }
}

// break keyword (rezervisna rec) predstavlja da od tog trenutka for petlja prestaje sa radom.

// Ispisati sve brojeve od 1 do 10. Ako je neki broj deljiv sa 7 neka se prekine petlja.
for (let broj = 1; broj < 11; broj++) {
  if (broj % 7 === 0) {
    break;
  } else {
    console.log(broj);
  }
}

// Ispisati parne brojeve od 1 do 20 na dva nacina.
// I nacin
for (let broj = 1; broj <= 20; broj++) {
  if (broj % 2 === 0) {
    console.log(broj);
  }
}

// II nacin
for (let broj = 2; broj <= 20; broj += 2) {
  console.log(broj);
}

// Domaci:
// 1.
// Ispisati neparne brojeve od 1 do 20 na dva nacina.
// 2.
// Ispisati sve brojeve od 50 do 100 koji su deljivi sa 5.
// 3.
// Ispisati dvostruku vrednost prirodnih brojeva od 6 do 14.
// 4.
// Suma neparnih prirodnih brojeva od 10 do 20.
