// U Fibonacijevom nizu cije vrednosti ne prelaze 4 miliona, pronaci sumu parnih elemenata.

// Fibonacijev niz je sastavljen na nacin da je element jednak zbiru prethodna dva elementa.

const niz = [1, 1];
let i = 2;
while (niz[i - 2] + niz[i - 1] < 4000000) {
  niz.push(niz[i - 2] + niz[i - 1]);
  i++;
}
const suma = niz
  .filter((br) => br % 2 === 0)
  .reduce((prev, curr) => prev + curr);
console.log(suma);

// Broj palindrom se cita isto sa obe strane. Najveci palindrom napravljen od proizvoda dva dvocifrena broja je 9009 = 91 x 99.
//  Pronaci najveci palindrom napravljen od proizvoda dva trocifrena broja.

const isPalindrom = (broj) => {
  const strBroj = broj.toString();
  let newStrBroj = "";
  for (let i = strBroj.length - 1; i >= 0; i--) {
    newStrBroj += strBroj[i];
  }
  if (strBroj === newStrBroj) {
    return true;
  } else {
    return false;
  }
};

const maxPalindrom = () => {
  const niz = [];
  for (i = 100; i < 1000; i++) {
    for (k = i; k < 1000; k++) {
      if (isPalindrom(i * k) && !niz.includes(i * k)) {
        niz.push(i * k);
      }
    }
  }
  return Math.max.apply(null, niz);
};
console.log(maxPalindrom());

// 2. nacin

// const maxPalindrom2 = () => {
//   for (i = 999; i > 99; i--) {
//     for (k = i; k > 99; k--) {
//       if (isPalindrom(i * k)) {
//         return i * k;
//       }
//     }
//   }
// };

// console.log(maxPalindrom2());
