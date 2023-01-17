// filter() metoda kreira novi niz sa onim elementima koji se prosli test.
// Novodobijeni niz moze imati maksimalno elemenata kao niz na koji se primenjuje metoda, takodje moze biti prazan niz.

const godine = [19, 17, 20, 17, 16, 15, 19, 20];
const punoletni = godine.filter(function (element) {
  return element > 17;
});
console.log(punoletni);

// Napraviti novi niz koji filtrira postojeci i vraca novi sa onim elementima starog niza, gde je drugo slovo "e".
const niz = [
  "Bakir",
  "Haris",
  "Amer",
  "Dzenan",
  "Hasan",
  "Aladin",
  "Nikola",
  "Merisa",
  "Emin",
  "Alen",
  "Miona",
  "Mitar",
];

const niz2 = niz.filter((el) => el[1] === "e");
console.log(niz2);

// Napraviti novi niz koji filtrira postojeci i vraca novi sa onim elementima cija je duzina <= 6.

const niz3 = niz.filter((el) => el.length <= 4);
console.log(niz3);

// Napraviti novi niz koji filtrira postojeci i vraca novi
//  sa onim elementima ciji je tip "boolean".
const newArr = ["Rec", "Dve RECi", 26, true, false, [true, false], 49, true];

const boolArr = newArr.filter((el) => typeof el === "boolean");
console.log(boolArr);

// Napraviti funkciju koja pravi niz koji ce iz postojeceg napraviti novi uz ispunjenje uslova:
//    value > 2 => value * 7
//    value >2 and value <8 => (value*4)/2
//    Ostale vrednosti da ne uzima u obzir
//    I na kraju treba novi niz vratiti sa godinama <10.

function secondTask(arr) {
  const newArr = arr.filter((el) => el > 2);
  const newArr2 = newArr.map((el) => {
    if (el < 8) {
      return el * 2;
    } else {
      return el * 7;
    }
  });
  const newArr3 = newArr2.filter((el) => el < 10);
  return newArr3;
}
console.log(secondTask([-1, 2, 3, 4, 6, 9, 12, 14]));

// reduce() metoda vraca jednu vrednost. Iteracija se vrsi kroz ceo niz.

// Sabrati sve elemente niza:
// const godine = [19, 17, 20, 17, 16, 15, 19, 20];

const zbirGodina = godine.reduce(
  (previousValue, currentValue) => previousValue + currentValue
);
console.log(zbirGodina);

// Dodati pocetni vrednost 350:

const iznos = godine.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  350
);
console.log(iznos);

// Prosecna starost godina:
const prosek = (arr) => {
  const duzina = arr.length;
  const suma = arr.reduce((prev, curr) => prev + curr);
  return +(suma / duzina).toFixed(2);
};

console.log(prosek(godine));

// Write a function that converts an array of values from miles to kilometres using the map method.
// In the end, add the kilometres up in a new variable called "totalDistanceInKilometers" and
// return this variable.
const miles = [55, 78, 140, 121, 96, 100, 67];
const totalKilometers = (arr) => {
  const totalDistanceInKilometers = arr
    .map((el) => el * 1.61)
    .reduce((prev, curr) => prev + curr);
  return totalDistanceInKilometers;
};

console.log(totalKilometers(miles));

// 5. There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays. Go to the editor
// Sample array :
array1 = [1, 0, 2, 3, 4];
array2 = [3, 5, 6, 7, 8, 13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]

const addition = (arr1, arr2) => {
  const length = arr1.length > arr2.length ? arr1.length : arr2.length;
  const newArr = [];
  for (let i = 0; i < length; i++) {
    if (arr1[i] === undefined) {
      newArr.push(arr2[i]);
    } else if (arr2[i] === undefined) {
      newArr.push(arr1[i]);
    } else {
      newArr.push(arr1[i] + arr2[i]);
    }
  }
  return newArr;
};
console.log(addition(array1, array2));

// 1. Iz niza od 10 elemenata izracunati sumu parnih brojeva niza.

// 2. From the array of numbers, choose even double even numbers and compute the sum using Array's filter, map and reduce methods.

// 3. Write a JavaScript program to find the most frequent item of an array.
// Sample array :
const arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

// 4. Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
let element;
let brojPojavljivanja = 1;
let brojac = 0;
for (let i = 0; i < arr1.length; i++) {
  for (let j = i; j < arr1.length; j++) {
    if (arr1[i] === arr1[j]) {
      brojac++;
      if (brojPojavljivanja < brojac) {
        brojPojavljivanja = brojac;
        element = arr1[i];
      }
    }
  }
  brojac = 0;
}
console.log(`${element} se pojavljuje ${brojPojavljivanja} puta.`);
