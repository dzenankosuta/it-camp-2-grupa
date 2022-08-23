// for (let i = 1; i <= 10; i++) {
//   if (i === 7) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

// while petlja

// while () {
//     // blok koda koji ce se izvrsiti dok vazi uslov
// }

// let i = 0;
// while (i < 10) {
//   i++; // deo koji je neizostavan kako se ne bi desavala beskonacna
//   if (i === 7) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

// 2.Zadatak

// const broj = prompt("Unesite neki broj: ");
// i = 1;

// while (i <= broj) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
//   i++;
// }

// Do while petlja je slicna while petlji. S tim sto ima jedna razlika.

// i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i < 12);

// let recenica = "Danas je nakon 20 dana padala kisa.";
// let recenica2 = "";

// console.log(recenica[4]);
// console.log(recenica.length);

// Koristeci for petlju izbrisati razmake date recenice.
// duzina = recenica.length;
// for (let i = 0; i < duzina; i++) {
//   if (recenica[i] === " ") {
//     continue;
//   } else {
//     recenica2 = recenica2 + recenica[i];
//   }
// }

// console.log(recenica2);

// recenica = "IT Camp je kurs koji treba da traje 9 meseci";
// recenica2 = "";
// // Koristeci for petlju izbrisati "a" i "m" karaktere date recenice.
// duzina = recenica.length;
// for (let i = 0; i < duzina; i++) {
//   if (recenica[i] === "a" || recenica[i] === "m") {
//     continue;
//   } else {
//     recenica2 = recenica2 + recenica[i];
//   }
// }
// console.log(recenica2);

let rec = "dan";

let duzina = rec.length;
console.log(duzina);

let rec2 = rec.toUpperCase();
console.log(rec2);

// FIZZ BUZZ CHALLENGE
// Iteracija se vrsi od 1 do 100(ukljucujuci).
// Ako je dati broj deljiv sa 3 u konzoli se ispisuje FIZZ,
// ako je dati broj deljiv sa 5 u konzoli se ispisuje BUZZ i
// ako je dati broj deljiv i sa 3 i sa 5 u konzoli se ispisuje FIZZ BUZZ.

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FIZZ BUZZ");
  } else if (i % 5 === 0) {
    console.log("BUZZ");
  } else if (i % 3 === 0) {
    console.log("FIZZ");
  } else {
    console.log(i);
  }
}

let recenica = "nakon svakog vezbanja je preporuka postaviti promene na github";

let s = recenica[6];
console.log(s);

let rec3 = "treca";

console.log(rec3.length);
console.log(rec3[4]);

// Napraviti novu recenicu gde ce svaka rec pocinjati velikim slovom.

let recenica2 = "";
for (let i = 0; i <= recenica.length - 1; i++) {
  if (i === 0) {
    recenica2 += recenica[i].toUpperCase();
  } else if (recenica[i - 1] === " ") {
    recenica2 += recenica[i].toUpperCase();
  } else {
    recenica2 += recenica[i];
  }
}

console.log(recenica2);

recenica = "nakon svakog vezbanja je preporuka postaviti promene na github";
// Domaci:
// Napraviti novu recenicu gde ce svaka rec zavrsavati velikim slovom.

// Sabrati razmake i ispisati njihov broj u konzoli.

let brojRazmaka = 0;

for (let i = 0; i <= recenica.length - 1; i++) {
  if (recenica[i] === " ") {
    brojRazmaka++;
  }
}

console.log(brojRazmaka);

// Iz date recenice izbrisati razmake i ispisati u konzoli novodobijenu recenicu
