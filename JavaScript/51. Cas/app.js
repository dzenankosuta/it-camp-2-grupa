// SINHRONI JS - Dzemil Dupljak

// Zadaci:
// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

function funkcija(niz) {
  for (i = 0; i < niz.length - 1; i++) {
    for (j = i + 1; j < niz.length; j++) {
      if (niz[i] > niz[j]) {
        pom = niz[j];
        niz[j] = niz[i];
        niz[i] = pom;
      }
    }
  }
  console.log(niz);
}
funkcija(["ab", "a", "abc"]);

// const sortArray = (sampleArray) => {
//   sampleArray.sort((first, second) => {
//     if (first.length > second.length) return 1;
//     return -1;
//   });
// };
const sortArray = (sampleArray) => {
  sampleArray.sort((first, second) => {
    return second.length - first.length;
  });
};

const arr = ["Telescopes", "Glasses", "Eyes", "Monocles"];
sortArray(arr);
console.log(arr);

// Domaci:
// 1.
// Don't give me five!
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12

// 2.
// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

// min([1,2,3,4,5], 'value') // => 1
// min([1,2,3,4,5], 'index') // => 0
