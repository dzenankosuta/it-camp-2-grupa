// 2.(20) Napraviti funkciju koja ima 2 obavezna parametra (niza).
// Napraviti pomoćni niz koji će sadrzati sve elemente oba niza.
// Napraviti jos jedan pomoćni niz koji ce iz prvog dodatnog niza sadržati parne brojeve ako je element tipa “number”, dok, ako je element string, treba sadržati one elemente čija je dužina neparna. U drugom pomoćnom nizu umetnuti na prva dva mesta 10 i 20.
//  Funkcija na kraju treba da vrati dva napravljena pomoćna niza.

const prvi = [1, 2, 3, 4, 5, 6, 4, 5, 6, 7, 8, 9];
const drugi = ["ha", "ah", "t", "i", "d", "z"];

const zadatak = (niz1, niz2) => {
  const pomocni1 = prvi.concat(drugi);
  const pomocni2 = [];
  for (let a of pomocni1) {
    if (typeof a === "number") {
      if (a % 2 === 0) {
        pomocni2.push(a);
      }
    } else if (typeof a === "string") {
      if (a.length % 2 !== 0) {
        pomocni2.push(a);
      }
    }
  }
  pomocni2.unshift(10, 20);
  return [pomocni1, pomocni2];
};
console.log(zadatak(prvi, drugi));
