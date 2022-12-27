// Domaci zadatak.
// Write a JavaScript function to get the least common multiple (NZS) of two numbers.

const NZS = (br1, br2) => {
  const veci = Math.max(br1, br2);
  let i = veci;
  let nzs;
  while (true) {
    if (i % br1 === 0 && i % br2 === 0) {
      nzs = i;
      break;
    }
    i++;
  }
  return nzs;
};

console.log(NZS(5, 1));
console.log(NZS(5, 4));
console.log(NZS(6, 4));
