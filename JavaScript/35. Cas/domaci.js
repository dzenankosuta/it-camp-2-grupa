// 4.
const brojevi = [-5, 4, 3, 10, 14, -5];
// Napraviti novi niz koji ce sve negativne brojeve pomnoziti sa (-1), a pozitivne kvadrirati.

const kvadriraj = (broj) => {
  if (broj < 0) {
    return -broj;
  } else {
    return broj ** 2;
  }
};

const brojevi2 = brojevi.map(kvadriraj);
console.log(brojevi2);

// Napraviti funkciju koja pravi novi niz gde ce se pozitivni elementi kvadrirati, negativni pomnoziti sa (-1), a ako se neki element pojavljuje vise puta u originalnom nizu, na svako sledece pojavljivanje ce se u novom nizu dodati element "ovde je bio duplikat".

const second = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.slice(0, i).includes(arr[i])) {
      newArr.push("ovde je bio duplikat");
    } else if (arr[i] < 0) {
      newArr.push(-arr[i]);
    } else {
      newArr.push(arr[i] ** 2);
    }
  }
  return newArr;
};
console.log(second([5, 4, -9, 0, -6, 5, 4]));
