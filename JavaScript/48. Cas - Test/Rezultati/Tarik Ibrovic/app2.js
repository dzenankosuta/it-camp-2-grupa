// 2.	(20) Napraviti funkciju koja ima 2 obavezna parametra (niza).
// Napraviti pomoćni niz koji će sadrzati sve elemente oba niza.
// Napraviti jos jedan pomoćni niz koji ce iz prvog dodatnog niza sadržati parne brojeve ako je element tipa “number”, dok, ako je element string, treba sadržati one elemente čija je dužina neparna. U drugom pomoćnom nizu umetnuti na prva dva mesta 10 i 20.
//  Funkcija na kraju treba da vrati dva napravljena pomoćna niza.

const niz1 = [1, 2, 3, 4, 5];
const niz2 = ["a", "b", "c", "d", "e"];

const drugizadatak = (par1, par2) => {
  const pomocniniz = par1.concat(par2);
  const pomocniniz1 = pomocniniz.filter((element) => element % 2 === 0);
  pomocniniz1.unshift(10, 20);
  return `${pomocniniz}\n ${pomocniniz1}`;
};
console.log(drugizadatak(niz1, niz2));
