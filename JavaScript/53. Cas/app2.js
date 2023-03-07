// Promise je JavaScript objekat koji predstavlja mesto za rezultate asinhrone funkcije sve dok traje izvrsavanje asinhrone operacija.

const cizburger = new Promise((resolve, reject) => {
  const response = 200;
  //   const response = 404;
  if (response >= 200 && response < 300) {
    resolve();
  } else {
    reject();
  }
});

cizburger
  .then(() => console.log("Dobio sam cizburger."))
  .catch(() => console.log("Nisam dobio obrok."))
  .finally(() => console.log("Obecanje je zavrseno."));

const niz = new Promise((resolve, reject) => {
  const response = 200;
  //   const response = 404;
  if (response >= 200 && response < 300) {
    resolve([1, 2, 3, 4, 5]);
  } else {
    reject("Nismo dobili trazeni niz.");
  }
});

// chain efekat se postize tako sto vrednost koja treba biti koriscena u narednoj callback funkciji then metode se mora naci u return prethodne callback funkcije, prethodne then metode.
niz
  .then((niz) => {
    console.log(`Dobili smo ${niz}.`);
    const parni = niz.filter((br) => br % 2 === 0);
    return parni;
  })
  .then((noviNiz) => console.log(`Filtriran niz je ${noviNiz}`))
  .catch((message) => console.log(message));

// Domaci:
// Napraviti promise koji proverava da li je neki objekat ispunio uslova da je njegov property godine veci od 17 ili nije.
// U slucaju da je osoba punoletna then() funkcija vraca poruku "Vi ste punoletni".
// U slucaju da osoba nije punoletna catch() vraca broj godina osobe.

// Napraviti funkciju koja sadrzi Promise koji proverava da li poslati argument funkcije ima vise od 10 samoglasnika.
// Ako argument ima vise od 10 samoglasnika neka se uspesno izvrsi obecanje sa porukom "String zadovoljava uslov";
// ako argument ima manje od 11 samoglasnika neka se reject_a obecanje uz poruku "String ne zadovoljava uslov";
// U svakom slucaju neka stoji poruka "Funkcija je uspesno izvrsena".

function proveraStringa(text) {
  const promis = new Promise((resolve, reject) => {
    const stringg = text.toLowerCase();
    let brojac = 0;
    for (let i = 0; i < stringg.length; i++) {
      if (
        stringg[i] === "a" ||
        stringg[i] === "e" ||
        stringg[i] === "i" ||
        stringg[i] === "o" ||
        stringg[i] === "u"
      ) {
        brojac++;
      }
    }
    if (brojac > 10) {
      resolve("String zadovoljava uslov!");
    } else {
        reject("String ne zadovoljava uslov!");
    }
  });

  promis
    .then((poruka) => {
      console.log(poruka);
    })
    .catch((poruka) => {
      console.log(poruka);
    });
  return "Proverili smo string!";
}

console.log(proveraStringa("oooaoaoaoaoaoaoaoaooaoaoa"));
console.log(proveraStringa("neki str"));
