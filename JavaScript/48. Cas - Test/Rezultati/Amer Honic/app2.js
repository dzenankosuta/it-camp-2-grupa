// 2.	(20) Napraviti funkciju koja ima 2 obavezna parametra (niza).
// Napraviti pomoćni niz koji će sadrzati sve elemente oba niza.
// Napraviti jos jedan pomoćni niz koji ce iz prvog dodatnog niza sadržati parne brojeve ako je element tipa “number”, dok, ako je element string, treba sadržati one elemente čija je dužina neparna. U drugom pomoćnom nizu umetnuti na prva dva mesta 10 i 20.
//  Funkcija na kraju treba da vrati dva napravljena pomoćna niza.

function haha(n1, n2) {
  const pomocni = [];
  const pomocni1 = [];
  let velika = n1.length + n2.length;

  for (i = 0; i < velika; i++) {
    if (i < niz1.length) pomocni.push(niz1[i]);
    else pomocni.push(niz2[i - niz1.length]);
  }
  for (i = 0; i < pomocni.length; i++) {
    if (pomocni[i] != isNaN && pomocni[i] % 2 === 0) {
      pomocni1.push(pomocni[i]);
    } else if (typeof pomocni[i] == typeof "z" && pomocni[i].length % 2 === 1)
      pomocni1.push(pomocni[i]);
  }
  pomocni1.unshift(10, 20);
  return pomocni1;
}

console.log(haha());
