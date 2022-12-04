// split() metoda nam vraca niz na osnovu nekog stringa na koji je primenjena.

const recenica =
  "Ovde je prilicno hladno, ali smo dobili obecanje da ce uskoro poceti grejanje. Ako se to ne desi, bice odlaganja casova.";

// Ako se kod split() metode izostavi argument, dobicemo niz od jednog elementa.
const niz = recenica.split();
console.log(niz);

const niz2 = recenica.split(",");
console.log(niz2);

const niz3 = recenica.split("*");
console.log(niz3);

// Napraviti niz od stringa, tako da se elementi niza prave do svake reci "decembar". Rec "decembar" ne sme biti deo nijednog elementa niza.
const recenica2 =
  "Decembar je poslednji mesec u godini. U decembar pocinje zima, decembar je najhladniji mesec u godini.";

const niz4 = recenica2.split(/decembar/i);
console.log(niz4);

// Search metode:

// indexOf() metoda nam vraca prvu poziciju gde se zapravo nalazi poslati argument (jedan ili vise karaktera) kada se radi o nekom stringu.

const pozicija = recenica2.indexOf("j");
console.log(pozicija);

const pozicija2 = recenica2.indexOf("mesec");
console.log(pozicija2);

// Ako trazimo poziciju nepostojeceg stringa unutar nase recenice, rezultat ce biti broj -1.
const pozicija3 = recenica2.indexOf("Omar");
console.log(pozicija3);

// Drugi argument predstavlja poziciju od koje krecemo sa trazenjem stringa.
const pozicija4 = recenica2.indexOf("mesec", 30);
console.log(pozicija4);

// lastIndexOf() metoda nam vraca poslednju poziciju gde se zapravo nalazi poslati argument (jedan ili vise karaktera) kada se radi o nekom stringu.

const pozicija5 = recenica2.lastIndexOf("mesec");
console.log(pozicija5);

// Ako trazimo poziciju nepostojeceg stringa unutar nase recenice, rezultat ce biti broj -1.

const pozicija6 = recenica2.lastIndexOf("ima li ovo");
console.log(pozicija6);

// Napraviti funkciju koja na osnovu parametra ispituje pojavljivanje reci "ko osvaja".
// Ako se pojavljuje vise puta dati string, vratiti poziciju prvog i poslednjeg pojavljivanja, ako se pojavljuje jednom, vratiti poziciju pojavljivanja, dok ako se ne pojavljuje dati string vratiti poruku:
// "Nismo pronasli dati string."

function position(sentence) {
  const firstApp = sentence.indexOf("ko osvaja");
  const lastApp = sentence.lastIndexOf("ko osvaja");
  if (firstApp === -1) {
    return "Nismo pronasli dati string.";
  } else if (firstApp === lastApp) {
    return "Reci 'ko osvaja' se nalaze jednom u datoj recenici.";
  } else if (firstApp !== lastApp) {
    return (
      "Prvo pojavljivanje reci 'ko osvaja' se nalazi na " +
      firstApp +
      "poziciji.\nPoslednje pojavljivanje reci 'ko osvaja' se nalazi na " +
      lastApp +
      "poziciji."
    );
  }
}
console.log(
  position("ko osvaja svetsko prvenstvo ove godine? Stvarno, ko osvaja?")
);
console.log(position("ko osvaja svetsko prvenstvo ove godine?"));
console.log(position("Ko osvaja svetsko prvenstvo ove godine?"));
