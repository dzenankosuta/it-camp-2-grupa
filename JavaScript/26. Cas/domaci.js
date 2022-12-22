// 33. Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

// 34. Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.

// 33.

function firstTask(num1, num2) {
  if (
    ((num1 >= 40 && num1 <= 60) || (num1 >= 70 && num1 <= 100)) &&
    ((num2 >= 40 && num2 <= 60) || (num2 >= 70 && num2 <= 100))
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(firstTask(45, 77));
console.log(firstTask(39, 77));
console.log(firstTask(39, 156));
console.log(firstTask(80, 86));
console.log(firstTask(45, 56));

// 34.
function secondTask(num1, num2) {
  if (num1 < 40 || num1 > 60 || num2 < 40 || num2 > 60) {
    return `Niste poslali korektne brojeve.`;
  } else if (num1 === num2) {
    return `Brojevi su jednaki.`;
  } else {
    const veciBroj = num1 > num2 ? num1 : num2;
    return `Veci je broj ${veciBroj}.`;
  }
}

console.log(secondTask(4, 55));
console.log(secondTask(44, 55));
console.log(secondTask(74, 55));
console.log(secondTask(60, 55));
