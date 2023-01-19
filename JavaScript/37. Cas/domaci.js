// 3. Write a JavaScript program to find the most frequent item of an array.
// Sample array :
const arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

let pojavljinje = 1;
let element;
let brojac = 0;
for (let i = 0; i < arr1.length; i++) {
  for (let k = i; k < arr1.length; k++) {
    if (arr1[i] === arr1[k]) {
      brojac++;
      if (brojac > pojavljinje) {
        element = arr1[i];
        pojavljinje = brojac;
      }
    }
  }
  brojac = 0;
}
console.log(
  "To je element" +
    " " +
    element +
    " " +
    "i pojavljuje se " +
    pojavljinje +
    "puta"
);
// for (i = 1; i < 4; i++) {
//   for (j = i; j < 4; j++) {
//     console.log(i, j);
//   }
// }

// 4. Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

const change = (str) => {
  let newStr = "";
  for (i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i].toLowerCase();
    }
  }
  return newStr;
};

console.log(change("The Quick Brown Fox"));
