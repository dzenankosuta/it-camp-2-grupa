//(20) Napraviti funkciju koja ima 2 obavezna parametra (niza).
// Napraviti pomoćni niz koji će sadrzati sve elemente oba niza.
// Napraviti jos jedan pomoćni niz koji ce iz prvog dodatnog niza sadržati parne brojeve ako je element tipa “number”, dok, ako je element string, treba sadržati one elemente čija je dužina neparna. U drugom pomoćnom nizu umetnuti na prva dva mesta 10 i 20.
//  Funkcija na kraju treba da vrati dva napravljena pomoćna niza.

niz1 = [1, 2, 3, 7, 6, 22];
niz2 = ["a", "b", "c", "d", "e"];
const funkcija = (arr1, arr2) => {
  const pomocniNiz = arr1.concat(arr2);
  const pomocniNiz2 = [];
  for (let a of pomocniNiz) {
    if (typeof a === "number") {
      if (a % 2 === 0) {
        pomocniNiz2.push(a);
      }
    } else if (typeof a === "string") {
      if (a.length % 2 !== 0) {
        pomocniNiz2.push(a);
      }
    }
  }
  pomocniNiz2.unshift(10, 20);
  return [pomocniNiz, pomocniNiz2];
};
console.log(funkcija(niz1, niz2));
