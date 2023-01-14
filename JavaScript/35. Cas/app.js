// Kvadrirati one brojeve koje imaju index 0,3,5.
brojevi = [2, 5, 8, -3, 5, 9];
const brojevi1 = brojevi.map((element, index) => {
  if (index === 0 || index === 3 || index === 5) {
    return element ** 2;
  } else return element;
});
console.log(brojevi1);

// Napraviti novi niz koji sadrzi kvadrate parnih elemenata postojeceg niza. Dok za neparne elemente treba vratiti aritmeticku vrednost prethodnog elementa, datog, i narednog.
const numbers = [2, 5, 10, 3, 4, 8];

const numbers2 = numbers.map((element, index, arr) => {
  if (element % 2 === 0) {
    return element ** 2;
  } else {
    return +((arr[index - 1] + element + arr[index + 1]) / 3).toFixed(2);
  }
});

console.log(numbers2);

// Domaci:
// 1. Pomocu for petlje napraviti novi niz, koji ce sadrzati samo godine vece od 17.

// 2.
// Prvi deo. Napraviti pomocni niz koji ce sadrzati elemente od oba niza.
// Drugi deo. Napraviti jos jedan pomocni niz koji ce iz prvog dodatnog niza uzeti parne brojeve.
// Treci deo. U drugom pomocnom nizu umetnuti na prva dva mesta 10 i 20.
// Funkcija na kraju treba da vrati dva napravljena pomocna niza.

const DATA1 = [2, 26, 38, 75, 11, 29];
const DATA2 = ["a", "b", "c", "d", "e"];
