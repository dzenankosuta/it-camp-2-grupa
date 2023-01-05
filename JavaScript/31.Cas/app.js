// unshift() metoda dodaje na pocetku niza jedan ili vise elemenata.
// unshift() prikazuje novu duzinu niza.

const niz = ["cetvrtak", "petak", "subota"];

niz.unshift("sreda");
console.log(niz);

console.log(niz.unshift("ponedeljak", "utorak"));
console.log(niz);

// shift() metoda brise prvi element niza i svim ostalim elementima smanjuje index za 1.
// shift() metoda vraca izbrisani element. Kao kod pop() metode.

console.log(niz.shift());
console.log(niz);

// delete keyword za prisanje odredjenog elementa unutar niza:
// Preko delete keyword mozemo izbrisati bilo koji element iz niza ali na taj nacin ostavljamo rupe u nizu (undefined vrednosti).

console.log(niz.length);

delete niz[4];
console.log(niz);

// concat() metoda se koristi za spajanje nizova. concat() metoda pravi novi niz. S tim sto kao argument mozemo poslati i string, ne mora iskljucivo biti niz.

const muskarci = ["Mitar", "Tarik", "Dzenan"];
const devojke = ["Miona", "Merisa", "Hatidza"];
const grupa = muskarci.concat(devojke, "Mehmed", "Omar");
console.log(grupa);

// Iz naseg niza grupa napraviti dva niza muskarci i devojke, s tim sto se Omar ne sme naci nigde.
const podeliNiz = (niz) => {
  const muskarci = [];
  const devojke = [];
  for (let osoba of niz) {
    if (osoba === "Omar") {
      continue;
    } else if (osoba[osoba.length - 1] === "a") {
      devojke.push(osoba);
    } else {
      muskarci.push(osoba);
    }
  }
  return `Muskarci su ${muskarci} \n
  Devojke su ${devojke}`;
};

console.log(podeliNiz(grupa));

// 1. Napraviti funkciju koja pravi novi niz, koji ce sadrzati samo elemente koji su se nalazili na neparnim mestima unutar originalnog niza.
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
// [1,3,5,7,9,11,13]

const neparnePozicije = (niz) => {
  const neparni = [];
  for (let i = 0; i < niz.length; i += 2) {
    neparni.push(niz[i]);
  }
  return neparni;
};
console.log(neparnePozicije([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]));

// Domaci:
// 1. Napraviti funkciju koja pravi novi niz, koji ce sadrzati samo elemente koji su se nalazili na parnim mestima unutar originalnog niza.
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
// [2,4,6,8,10,12,14]
// 2. Iz nekog niza izdvojiti sve parne brojeve.(Napraviti novi niz)
// 3. Iz nekog niza izdvojiti sve neparne brojeve.(Napraviti novi niz)
// 4. Iz nekog niza izdvojiti sve pozitivne brojeve.(Napraviti novi niz)

function pozitivni(niz) {
  const pozitivni = [];
  for (let broj of niz) {
    if (broj > 0) {
      pozitivni.unshift(broj);
    }
  }
  return pozitivni;
}
console.log(pozitivni([-5, -7, 0, 3, 6, -6, 4, 10]));
