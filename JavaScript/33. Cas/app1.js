// indexOf() metoda vraca poziciju elementa koji predstavlja argument date metode.

const niz = ["Hatidza", "Bakir", "Amer", "Bakir", "Alen"];

const bakir = niz.indexOf("Bakir");
console.log(bakir + 1);

// indexOf() metoda vraca -1 ako se neki element ne nalazi u nizu.
const omar =
  niz.indexOf("Omar") === -1 ? "nije dolazio" : niz.indexOf("Omar") + 1;

console.log(omar);
// Drugi argument predstavlja poziciju od koje trazimo.
const hatidza = niz.indexOf("Hatidza", 1);
console.log(hatidza);

// lastIndexOf() metoda vraca poziciju poslednjeg pojavljivanja elementa koji predstavlja argument date metode.
// lastIndexOf() metoda vraca -1 ako se neki element ne nalazi u nizu.

const lastBakir = niz.lastIndexOf("Bakir");
console.log(lastBakir);

// Array.from() nam vraca niz, koji se pravi od nekog objekta koji ima length.

const noviNiz = Array.from("SVAKO SLOVO CE BITI POSEBAN ELEMENT NIZA");
console.log(noviNiz);

// includes() metoda nam vraca boolean u zavisnosti od toga da li se argument nalazi u nizu.

console.log(niz.includes("Emin"));

// keys() metoda vraca Array Iterator Object sa kljucevima(indeksima) nekog niza.

const indeksi = niz.keys();
console.log(indeksi);

for (let index of indeksi) {
  console.log(index);
}

// entries() metoda vraca Array Iterator Object sa key\value parovima nekog niza.

const entries = niz.entries();
console.log(entries);

for (let pair of entries) {
  console.log(pair);
}

// Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

const getElements = (niz, n) => {
  if (n > niz.length) {
    return niz;
  } else if (n === undefined) {
    return niz[0];
  } else {
    return niz.slice(0, n);
  }
};

console.log(getElements([1, 4, 5, -2, 0, 6, 14]));
console.log(getElements([1, 4, 5, -2, 0, 6, 14], 20));
console.log(getElements([1, 4, 5, -2, 0, 6, 14], 3));

// 1. Write a simple JavaScript program to join all elements of the following array into a string where is * between elements.

// 2. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8
