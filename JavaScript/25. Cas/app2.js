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

function bliziSto(par1, par2) {
  let i;
  let brojac1 = 0;
  let brojac2 = 0;
  if (par1 >= 100) {
    for (i = par1; i >= 100; i--) {
      brojac1++;
    }
  } else for (i = par1; i <= 100; i++) brojac1++;

  if (par2 >= 100) {
    for (i = par2; i >= 100; i--) {
      brojac2++;
    }
  } else for (i = par2; i <= 100; i++) brojac2++;

  if (brojac1 > brojac2) return "drugi je blizi";
  else if (brojac2 > brojac1) return "prvi je blizi";
  else return "isti su";
}

console.log(bliziSto(-10, 40));
console.log(bliziSto(101, 200));
console.log(bliziSto(105, 90));
console.log(bliziSto(-100, -90));

// 33. Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

// 34. Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.
