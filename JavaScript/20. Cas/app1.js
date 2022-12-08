// 1.	Prebrojati koliko ima malih slova u unetom stringu. Slova koja se koriste u stringu pripadaju isključivo engleskoj abecedi.

function kolikoMalih(recenica) {
  let brojac = 0;
  for (let i = 0; i < recenica.length; i++) {
    if (recenica[i] === recenica[i].toLowerCase() && recenica[i] !== " ") {
      brojac++;
    }
  }
  return brojac;
}
console.log(kolikoMalih("da li BROJI razmake"));

// 2.	Ispitati da li u unetom stringu ima više malih ili velikih slova. Slova koja se koriste u stringu pripadaju isključivo engleskoj abecedi.

function kojihVise(recenica) {
  let brojacMalih = 0;
  let brojacVelikih = 0;
  for (let i = 0; i < recenica.length; i++) {
    if (recenica[i] !== recenica[i].toUpperCase()) {
      brojacMalih++;
    } else if (recenica[i] !== recenica[i].toLowerCase()) {
      brojacVelikih++;
    }
  }
  if (brojacMalih > brojacVelikih) {
    return `Malih ima ${brojacMalih} i njih je vise.`;
  } else if (brojacMalih < brojacVelikih) {
    return `Velikih ima ${brojacVelikih} i njih je vise.`;
  } else {
    return `U poslatom stringu ima jednak broj velikih i malih slova.`;
  }
}

console.log(kojihVise("koliko KOJIH"));
console.log(kojihVise("koliko KOJIH IMA VISE"));
console.log(kojihVise("koliko jos tri KOJIH IMA VISE"));

// 3.	Sva velika slova u stringu treba svesti na mala slova. Npr. za uneto 'WEBnSTUDY.com', dobija se novi string 'webnstudy.com'. Slova koja se koriste u stringu pripadaju isključivo engleskoj abecedi.

const toLower = (recenica) => {
  let novaRecenica = "";
  for (let i = 0; i < recenica.length; i++) {
    novaRecenica += recenica[i].toLowerCase();
  }
  return novaRecenica;
};

console.log(toLower("ISPISI sva Mala slovA"));

const toLower2 = (recenica) => recenica.toLowerCase();
console.log(toLower2("ISPISI sva Mala slovA"));

// 4. Pronaći poziciju poslednjeg razmaka u stringu. Npr. za uneto 'Pera ima devojku', rezultat je 8.

const lastSpace = (string) => {
  const index = string.lastIndexOf(" ");
  if (index === -1) {
    return `U datom stringu nema razmaka.`;
  }
  return `Poslednji razmak se nalazi na ${index} mestu.`;
};

console.log(lastSpace("Sta ako ima vise razmaka"));
console.log(lastSpace("string"));

// 5. Ispisati dužinu prve reči unetog stringa. Npr. za uneto 'Pera ima devojku', rezultat je 4. Podrazumeva se da uneti string nema vodeće razmake.

const duzinaPrveReci = function (recenica) {
  const index = recenica.search(" ");
  return `Prva rec ima ${index} karaktera.`;
};

console.log(duzinaPrveReci("PRVA"));

const duzinaPrveReci2 = function (recenica) {
  let brojac = 0;
  for (let i = 0; i < recenica.length; i++) {
    if (recenica[i] === " ") {
      break;
    } else {
      brojac++;
    }
  }
  return `Prva rec ima ${brojac} karaktera.`;
};
console.log(duzinaPrveReci2("koliko ima karaktera prva rec?"));

// 6.	Iz unetog stringa treba izdvojiti N znakova sa leve strane. Npr. za string 'Pera ima devojku' i N=6, dobija se 'Pera i'. Ako je N veće od dužine stringa, kao rezultat se dobija ceo string.

const prvihN = (recenica, n) => {
  if (n > recenica.length) {
    return recenica;
  } else {
    return recenica.substr(0, n);
  }
};
console.log(prvihN("Treba vratiti prvih 10 karaktera.", 10));
console.log(prvihN("Treba vratiti prvih 100 karaktera.", 100));

// Domaci zadatak:
// Proveriti da li je uneti string palindrom (potpuno je isti kada se čita od pozadi). Npr. 'anavolimilovana' je palindrom.
