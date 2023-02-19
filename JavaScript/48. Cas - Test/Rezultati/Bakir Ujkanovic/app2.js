// 2.	(20) Napraviti funkciju koja ima 2 obavezna parametra (niza).
// Napraviti pomoćni niz koji će sadrzati sve elemente oba niza.
// Napraviti jos jedan pomoćni niz koji ce iz prvog dodatnog niza sadržati parne brojeve ako je element tipa “number”, dok, ako je element string, treba sadržati one elemente čija je dužina neparna. U drugom pomoćnom nizu umetnuti na prva dva mesta 10 i 20.
//  Funkcija na kraju treba da vrati dva napravljena pomoćna niza.

function spajanje(niz1, niz2) {
  const niz3 = niz1.concat(niz2);
  const niz4 = niz3.filter(function (element) {
    if (typeof element === typeof 123) {
      if (element % 2 === 0) {
        return element;
      }
    }
    if (typeof element === typeof "string") {
      if (element.length % 2 !== 0) {
        return element;
      }
    }
  });
  niz4.unshift(10, 20);
  return [niz3, niz4];
}

const nizz = [1, 30, 25, 3, 12];
const nizs = ["evo", "moze", "svaka cast", "amerh"];

console.log(spajanje(nizz, nizs));
