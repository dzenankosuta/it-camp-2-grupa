// Domaci zadatak:
// // Napraviti objekat sa sledecim svojstvima:
// 1. firstName,
// 2. lastName,
// 3. language,
// 4. setLanguage - metoda za setovanje jezika,
// 5. setNickName - metoda (svaka osoba ima nadimak sastavljen od prva dva slova
// imena i prva dva slova prezimena)

// 1. Zadatak
const radnik = {
  firstName: "Dzenan",
  lastName: "Kosuta",
  fullname: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  language: [],
  setLanguage: function (lang) {
    if (!this.language.includes(lang)) {
      this.language.push(lang);
    }
  },
  setNickName: function () {
    let firstPart =
      this.firstName[0].toUpperCase() + this.firstName[1].toLowerCase();
    let secondPart =
      this.lastName[0].toLowerCase() + this.lastName[1].toLowerCase();
    return `${firstPart}${secondPart}`;
  },
};

console.log(radnik.language);
radnik.setLanguage("english");
console.log(radnik.language);
radnik.setLanguage("english");
console.log(radnik.language);
console.log(radnik.setNickName());

// 3. Zadatak
const automobil = {
  marka: "Audi",
  model: "Q7",
  boja: "Bela",
  pogon: "quattro",
  menjac: "Automatik",
  km: 240000,
  vlasnik: [062321552],
  garaza: {
    parking: "JKP Servis",
    vikend: "od 17 free",
    satnaKarta: "50",
    dnevnaKarta: "200",
    mesecnaKarta: "2000",
    platiZa: function (from, to) {
      const prvi = from.getTime();
      const drugi = to.getTime();
      const razlika = Math.abs(drugi - prvi);
      // 1000*60*60*24
      const brojDana = razlika / (1000 * 60 * 60 * 24);
      return `Vasa karta ce kostati ${brojDana * this.dnevnaKarta}.`;
    },
  },
};

console.log(
  automobil.garaza.platiZa(new Date(2023, 0, 21), new Date(2023, 0, 26))
);
