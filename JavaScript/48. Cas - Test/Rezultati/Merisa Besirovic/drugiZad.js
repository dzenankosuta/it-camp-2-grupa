// 2.	(20) Napraviti funkciju koja ima 2 obavezna parametra (niza).
// Napraviti pomoćni niz koji će sadrzati sve elemente oba niza.
// Napraviti jos jedan pomoćni niz koji ce iz prvog dodatnog niza sadržati parne brojeve ako je element tipa “number”,
//dok, ako je element string, treba sadržati one elemente čija je dužina neparna. U drugom pomoćnom nizu umetnuti na prva dva mesta 10 i 20.
//  Funkcija na kraju treba da vrati dva napravljena pomoćna niza.

function fja(arr1, arr2) {
  const pomocni = arr1.concat(arr2);
  const drugiPomocni = pomocni.filter(
    (el) =>
      (typeof el === "number" && el % 2 === 0) ||
      (typeof el === "string" && el.length % 2 === 1)
  );
  drugiPomocni.unshift(20);
  drugiPomocni.unshift(10);
  return drugiPomocni;
}
const niz1 = [1, 2, 3, 4];
const niz2 = [5, 4, "50", "nesto"];
console.log(fja(niz1, niz2));
