// 2.	(20) Napraviti funkciju koja ima 2 obavezna parametra (niza).
// Napraviti pomoćni niz koji će sadrzati sve elemente oba niza.
// Napraviti jos jedan pomoćni niz koji ce iz prvog dodatnog niza sadržati parne brojeve ako je element tipa “number”, dok, ako je element string, treba sadržati one elemente čija je dužina neparna. U drugom pomoćnom nizu umetnuti na prva dva mesta 10 i 20.
// Funkcija na kraju treba da vrati dva napravljena pomoćna niza.

const niz1 = [1, 2, 3, 4, 5];
const niz2 = ["a", "b", "c", "d", "e"];

const drugi = (arg1, arg2) => {
  const pomocni = arg1.concat(arg2);
  const pomocni1 = pomocni.filter((element) => element % 2 === 0);
  pomocni1.unshift(10, 20);
  return `${pomocni}\n ${pomocni1}`;
};
console.log(drugi(niz1, niz2));
