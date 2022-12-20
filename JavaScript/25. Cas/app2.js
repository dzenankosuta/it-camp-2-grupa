// 31. Write a JavaScript program to find the largest of three given integers.

const najveciBroj = function (prvi, drugi, treci) {
  let max;
  if (prvi >= drugi && prvi >= treci) {
    max = prvi;
  } else if (drugi >= prvi && drugi >= treci) {
    max = drugi;
  } else {
    max = treci;
  }
  return `Najveci broj je ${max}.`;
};

console.log(najveciBroj(3, 5, 7));
console.log(najveciBroj(-22, -33, -44));
console.log(najveciBroj(0, 5, 4));

// 32. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.

function bliziSto(prvi, drugi) {}

console.log(bliziSto(-10, 40));
console.log(bliziSto(101, 200));

// 33. Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

// 34. Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.
