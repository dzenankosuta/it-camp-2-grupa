// Osnovni principi objektno orijentisanog programiranja:

// 1. Enkapsulacija
// Princip skrivanja informacija i funkcionalnosti objekta i pruzanje jednostavnog i jasnog interfejsa za rad sa tim objektom.

// 2. Nasledjivanje (Inheritance)
// Obaj princip na m omogucava kreiranje novih klasa na osnou postojecih. Samim tim se nasledjuju sve funkcionalnosti postojecih klasa.

// 3. Polimorfizam
// Ovaj princip omogucava koriscenje istog koda za rad sa razlicitim tipovima objekata.

// 4. Apstrakcija
// Omogucava nam da izolujemo i identifikujemo bitne karakteristike objekta, a da zanemarimo manje bitne.

class Person {
  // Privatna svojstva unutar klase
  #ime;
  #prezime;
  constructor(ime, prezime, brGodina) {
    this.#ime = ime;
    this.#prezime = prezime;
    this.godine = brGodina;
  }
  //   Privatna metoda unutar klase:
  #getInfo() {
    console.log(`${this.#ime} ${this.#prezime} ima ${this.godine} godina.`);
  }
  // get metoda nam sluzi za prikazivanje nekih svojstava koja su privatna unutar klase
  get fullName() {
    console.log(`${this.#ime} ${this.#prezime}`);
  }
  // set metoda nam sluzi za promenu nekih svojstava koja su privatna unutar klase
  set changeName(newName) {
    this.#ime = newName;
  }
}

const person1 = new Person("Hatidza", "Mahmutovic", 17);
console.log(person1);
// Izvrsavanje get metode je sintaksicki isto kao pozivanje nekog svojstva.
console.log(person1.fullName);
// Setovanje nove vrednosti putem set metode se vrsi na nacin kao da modifikujemo vrednost nekog objekta, s tim sto se pozivamo na naziv set metode.
person1.changeName = "Miona";
console.log(person1.fullName);

// Polimorfizam primer:

class Oblik {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  povrsina() {
    return 0;
  }
}

class Pravougaonik extends Oblik {
  constructor(x, y, a, b) {
    super(x, y);
    this.a = a;
    this.b = b;
  }

  povrsina() {
    return this.a * this.b;
  }
}

const pravougaonik1 = new Pravougaonik(0, 0, 4, 5);
console.log(pravougaonik1);
console.log(pravougaonik1.povrsina());

class Krug extends Oblik {
  constructor(x, y, r) {
    super(x, y);
    this.r = r;
  }

  povrsina() {
    return Math.PI * this.r ** 2;
  }
}

const krug1 = new Krug(0, 0, 2);
console.log(krug1.povrsina());

// Polimorfna funkcija koju mozemo koristiti za razlicite tipove objekata.
function izracunajPovrsinu(oblik) {
  return oblik.povrsina();
}

console.log(izracunajPovrsinu(pravougaonik1));
console.log(izracunajPovrsinu(krug1));
