// (20) Napraviti funkciju koja ima 2 obavezna parametra (niza).
// Napraviti pomoćni niz koji će sadrzati sve elemente oba niza.
// Napraviti jos jedan pomoćni niz koji ce iz prvog dodatnog niza sadržati parne brojeve ako je element tipa “number”, dok, ako je element string, treba sadržati one elemente čija je dužina neparna. U drugom pomoćnom nizu umetnuti na prva dva mesta 10 i 20.
//  Funkcija na kraju treba da vrati dva napravljena pomoćna niza.
nizA = [2, 8, 5, 7, "haris", "amer"];
nizB = [10, 13, 15, 18, "aladin"];
function zadatak(arr1, arr2) {
  const pomocni = arr1.concat(arr2);
  const pomocni2 = [];
  for (let i = 0; i < pomocni.length; i++) {
    if (pomocni[i] % 2 === 0 && pomocni[i] !== isNaN) {
      pomocni2.push(pomocni[i]);
    } else if (
      typeof pomocni[i] === typeof "haris" &&
      pomocni[i].length % 2 !== 0
    ) {
      pomocni2.push(pomocni[i]);
    }
  }
  pomocni2.unshift(10, 20);
  return [pomocni, pomocni2];
}
console.log(zadatak(nizA, nizB));
