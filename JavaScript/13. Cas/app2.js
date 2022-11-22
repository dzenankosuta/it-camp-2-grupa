// Funkcija u JavaScriptu predstavlja blok koda koji se izvrsava samo prilikom pozivanja iste.
// Mozemo je definisati putem:
// 1. function keyword
// 2. arrow function sintakse.

// 1. function keyword:

// Pravimo funkciju koja sabira broj 3 i broj 5:
function zbirTriIPet() {
  const zbir = 3 + 5;
  return zbir;
  //   return 25 sve nakon return u function scope se zanemaruje
  //   const omar = "Omar"
}

console.log(zbirTriIPet());

// Pravimo funkciju koja sabira dva broja:
function zbirDvaBroja(par1, par2) {
  // par1 i par2 predstavljaju parametre funkcije
  return par1 + par2;
}

console.log(zbirDvaBroja(5, 22)); // 5 i 22 predstavljaju argumente funkcije

// Napraviti funkciju koja vraca zbir kvadrata dva broja.
function zbirKvadrata(a, b) {
  return a ** 2 + b ** 2;
}
console.log(zbirKvadrata(5, 4));
// console.log(zbirKvadrata(5));

// Defaultna vrednost nekog parametra:
// Napraviti funkciju koja vraca zbir kvadrata dva broja. Ako se izostavi drugi argument, funkcija ga racuna kao 0.
// 1. Nacin
function zbirKvadrata2(a, b) {
  if (b === undefined) {
    return a ** 2;
  } else {
    return a ** 2 + b ** 2;
  }
}
console.log(zbirKvadrata2(2, 3));
console.log(zbirKvadrata2(2));

// 2. Nacin
// Defaultne vrednosti se stavljaju na kraju!!
// Ne moze neka defaultna vrednost biti definisana pre obavezne!
function zbirKvadrata3(a, b = 0) {
  return a ** 2 + b ** 2;
}
console.log(zbirKvadrata3(5));
console.log(zbirKvadrata3(5, 1));

// Jos jedan nacin definisanja funkcije preko function keyword:

const aritmetickaSredina = function (par1 = 1, par2 = 1, par3 = 1) {
  return (par1 + par2 + par3) / 3;
};

console.log(aritmetickaSredina(4, 5, 3));
console.log(aritmetickaSredina(4, 5));
console.log(aritmetickaSredina());

// Napraviti funkciju povrsina koja uzima dve vrednosti.
// Ako su te dve vrednosti jednake da vraca povrsinu kvadrata uz odredjenu poruku,
// dok ako su razlicite vrednosti da vraca povrsinu pravougaonika uz odredjenu poruku.
const povrsina = function (a, b) {
  if (a === b) {
    return "Povrsina kvadrata iznosi " + a * b;
  } else {
    return "Povrsina pravougaonika iznosi " + a * b;
  }
};

console.log(povrsina(4, 6));
console.log(povrsina(4, 4));
