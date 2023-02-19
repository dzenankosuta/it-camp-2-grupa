// 2.	(20) Napraviti funkciju koja ima 2 obavezna parametra (niza).
// Napraviti pomoćni niz koji će sadrzati sve elemente oba niza.
// Napraviti jos jedan pomoćni niz koji ce iz prvog dodatnog niza sadržati parne brojeve ako je element tipa “number”, dok, ako je element string, treba sadržati one elemente čija je dužina neparna. U drugom pomoćnom nizu umetnuti na prva dva mesta 10 i 20.
//  Funkcija na kraju treba da vrati dva napravljena pomoćna niza.

const zadatak2 = function (arr1, arr2) {
  let pomocniArr = [...arr1, ...arr2];
  let drugiPomocniArr = pomocniArr.filter(
    (element) =>
      (typeof element === "number" && element % 2 === 0) ||
      (typeof element === "string" && element.length % 2 !== 0)
  );
  drugiPomocniArr.unshift(10, 20);
  console.log(drugiPomocniArr);
  return pomocniArr.concat(drugiPomocniArr);
};
console.log(
  zadatak2([10, 123, "20", "asd", "as"], [10, 123, "23", "asd", "as"])
);
