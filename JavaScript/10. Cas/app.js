// Stringovi su immutable promenljive, nije moguce vrsiti modifikaciju postojeceg stringa.
// Alternativa je da napravimo novi string i tada je moguce dodavati vrednosti kad god zelimo.

let rec1 = "Petak";
console.log(rec1[2]);

// toUpperCase() - metoda koja pretvara ceo string u velika slova.

let PETAK = rec1.toUpperCase();

console.log(PETAK);

// toLowerCase() - metoda koja pretvara ceo string u mala slova.

let petak = PETAK.toLowerCase();
console.log(petak);

const recenica0 =
  "Zelimo DATu reCENIcu priakzaTI MALIM, isto taKO i VELIkim slovima.";
const recenica01 = recenica0.toLowerCase();
const recenica02 = recenica0.toUpperCase();
console.log(
  "Recenica ispisana malim slovima ce biti: \n" +
    recenica01 +
    "Dok ce recenica ispisana velikim slovima biti: \n" +
    recenica02
);

const recenica =
  "sledece subote cemo imati test, koji predstavlja kraj prvog ciklusa. nakon toga cemo videti ko sve nastavlja sa 2. ciklusom it campa";
// Ispisati novu recenicu gde ce svaka rec pocinjati velikim slovom.
let novaRecenica = "";
for (let i = 0; i < recenica.length; i++) {
  if (i === 0) {
    novaRecenica += recenica[i].toUpperCase();
  } else if (recenica[i - 1] === " ") {
    novaRecenica += recenica[i].toUpperCase();
  } else {
    novaRecenica += recenica[i];
  }
}
console.log(recenica);
console.log(novaRecenica);

// Ispisati novu recenicu gde ce svaka rec zavrsavati velikim slovom.
let novaRecenica2 = "";
for (let i = 0; i < recenica.length; i++) {
  if (
    i === recenica.length - 1 ||
    recenica[i + 1] === "." ||
    recenica[i + 1] === ","
  ) {
    novaRecenica2 += recenica[i].toUpperCase();
  } else if (recenica[i + 1] === " ") {
    novaRecenica2 += recenica[i].toUpperCase();
  } else {
    novaRecenica2 += recenica[i];
  }
}
console.log(novaRecenica2);

// Domaci zadatak.
// 1.	Prebrojati koliko se puta u unetom stringu pojavljuje slovo "M" (i veliko i malo). Npr. za string 'Mama ima momu', dobija se rezultat 5.

// 2.	Prebrojati koliko ima znakova koji su cifre u unetom stringu.
