// flat() metoda se koristi kada unutar niza imamo element koji je niz, i zelimo da sve podelemente izvucemo na nacin da oni predstavljaju elemente glavnog niza.

const niz = [
  ["jabuka", "ananas", "jagoda", "kruska"],
  ["krompir", "luk", "paradajz"],
  ["pite", "razna jela"],
];

const niz2 = niz.flat();
console.log(niz2);

// Write a JavaScript program which prints the elements of the following array. Go to the editor
// Note : Use nested for loops.
// Sample array :
const a = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];
// Sample Output :
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"
const tenthTask = (arr) => {
  let outputStr = "";
  for (let i = 0; i < arr.length; i++) {
    outputStr += `row ${i} \n`;
    for (let k of arr[i]) {
      outputStr += `${k} \n`;
    }
  }
  return outputStr;
};
console.log(tenthTask(a));

const leapYears = (from, to) => {
  const leapYears = [];
  for (let i = from; i <= to; i++) {
    if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
      leapYears.push(i);
    }
  }
  return leapYears;
};

console.log(leapYears(2000, 2012));
