// JS objekti su mutable (promenljivi) //

const dzenan = {
  ime: "Dzenan",
  prezime: "Mecinovic",
  godine: 19,
};

const dzenan2 = dzenan;

console.log(dzenan2);
dzenan2.prezime = "Kosuta";
dzenan2.godine = 26;
console.log(dzenan2);
console.log(dzenan);

// Brisanje svojstava iz objekta:

const mitar = {
  ime: "Mitar",
  prezime: "Vranic",
  godine: 20,
  skola: "Prva Tehnicka",
};

delete mitar.skola; // delete keyword se koristi za brisanje elementa
// delete obj.property brise i key i value
console.log(mitar);

// 2. nacin
// delete mitar["skola"]

// Napomena.
// Vrednosti nekog objekta mogu biti:
// Objekti,
// Nizovi,
// Funkcije...

// Konvertovanje objekta u niz:
// Object.values(obj)
const niz = Object.values(mitar);
console.log(niz);

// Dodavanje novih svojstava:
mitar.punoletnost = true;
console.log(mitar);
