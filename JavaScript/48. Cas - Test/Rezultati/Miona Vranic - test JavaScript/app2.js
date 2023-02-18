// 2.	(20) Napraviti funkciju koja ima 2 obavezna parametra (niza).
// Napraviti pomoćni niz koji će sadrzati sve elemente oba niza.
// Napraviti jos jedan pomoćni niz koji ce iz prvog dodatnog niza sadržati parne brojeve ako je element tipa “number”, dok, ako je element string, treba sadržati one elemente čija je dužina neparna. U drugom pomoćnom nizu umetnuti na prva dva mesta 10 i 20.
//  Funkcija na kraju treba da vrati dva napravljena pomoćna niza.

const niz = (niz1, niz2) => {
  const pomocniNiz1 = niz1.concat(niz2);
  const pomocniNiz2 = pomocniNiz1.filter(
    (element) => typeof element === "number" && element % 2 === 0
  );
  pomocniNiz2.unshift(10, 20);
  return `Prvi pomocni niz je ${pomocniNiz1}, a drugi pomocni niz je ${pomocniNiz2}.`;
};
console.log(
  niz(
    ["casovi", "fakultet", "22", "test", 55, 66],
    [3, 5, 2, "18", 7, 9, true, 44, 34]
  )
);
