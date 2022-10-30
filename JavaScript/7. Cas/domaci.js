// Domaci:
// 1.
// Ispisati neparne brojeve od 1 do 20 na dva nacina.
// 2.
// Ispisati sve brojeve od 50 do 100 koji su deljivi sa 5.
// 3.
// Ispisati dvostruku vrednost prirodnih brojeva od 6 do 14.
// 4.
// Suma neparnih prirodnih brojeva od 10 do 20.

// 2.
for (let broj = 50; broj <= 100; broj++) {
  if (broj % 5 === 0) {
    console.log(broj);
  }
}

// 3.
for (let a = 6; a <= 14; a++) {
  console.log(a * 2);
}

// 4.
let suma = 0;
for (let i = 10; i < 21; i++) {
  if (i % 2 !== 0) {
    suma += i;
  }
}
console.log(suma);
