//  1. Sta je event bubling

// Event bubbling je proces u kojem se događaj koji se pokreće na određenom elementu u HTML-u prenosi.
// kroz hijerarhiju roditeljskih elemenata dok ne stigne do najvišeg roditeljskog elementa.
// Ovo se često događa kada postoje ugniježđeni elementi, kao što su dugmad unutar div-ova.
// Kada se klikne na dugme, događaj se pokreće na tom elementu, a zatim se prenosi na svakog
// roditelja sve dok ne dosegne korenski element dokumenta. Ova vrsta ponašanja događaja može biti korisna, ali također može biti problematična ako nije pažljivo upravljana.

// 2. sta ce se ispisati sa typeof(null)

// Ispisat će se "object". Ovo je specifičnost u jeziku JavaScript koja se održava radi kompatibilnosti s prethodnim verzijama.
// U starijim verzijama JavaScripta, null je bio objekt, pa je i dalje označen kao objekt, unatoč tome što je to pogrešno.
// To bi se moglo smatrati greškom u dizajnu jezika, ali promjena bi mogla poremetiti postojeći kod, pa se ova nekonzistentnost održava radi kompatibilnosti natrag.

// 3. Sta ce ispisati:
function foo(x, y) {
  x = x || 11;
  y = y || 31;
  console.log(x + y);
}

foo(0, 42);

// Funkcija "foo" ima dva parametra, "x" i "y". U tijelu funkcije, "x" i "y" se postavljaju na vrijednost koja se predaje kao argument,
// ako je vrijednost istinita (truthy), a inače se postavljaju na 11 i 31.

// U pozivu funkcije "foo(0, 42)", 0 se smatra neistinitom (falsy) vrijednošću, pa se "x" postavlja na 11, a "y" se postavlja na 42.
// Zatim se ispisuje zbir brojeva "x" i "y", što iznosi 53.

// 4. sta ce ispisati:
for (let i = 0; i < 5; i++) {}
console.log(i)(
  // Ovo će izazvati grešku "ReferenceError: i is not defined".

  // Varijabla "i" je definirana samo unutar petlje "for", koristeći "let" ključnu riječ. To znači da je opseg (scope) varijable "i" ograničen na blok petlje "for". Kada se petlja završi, varijabla "i" se briše i više se ne može koristiti. Stoga, poziv "console.log(i)"
  // izvan petlje izazvat će grešku "ReferenceError" jer varijabla "i" nije definirana u tom opsegu.

  // 5. sta ce ispisati sledeca funkcija:
  function () {
    const a = (b = 3);
  }
)();
console.log(typeof a !== "undefined");
console.log(typeof b !== "undefined");

// JavaScript Immediately Invoked Function Expressions (IIFEs)

// Ovo će ispisati "false" za prvi poziv i "true" za drugi poziv.

// U ovoj funkciji, "a" se definira kao konstanta (const) koja je postavljena na 3, dok se "b" postavlja na 3 bez upotrebe ključne riječi "const" ili "let". Međutim, pošto nema ključne riječi, "b" postaje globalna varijabla.

// Kada se funkcija izvrši, definiraju se varijable "a" i "b". Međutim, pošto je "a" definirana kao konstanta unutar anonimne
// funkcije, ona je dostupna samo unutar te funkcije. To znači da se prvi poziv "console.log" izraza odnosi na varijablu "a" koja
// nije dostupna izvan funkcije, pa će ispisati "false".

// S druge strane, varijabla "b" definirana je bez ključne riječi "var", "let" ili "const", zbog čega postaje globalna varijabla
// dostupna izvan anonimne funkcije. Stoga drugi poziv "console.log" izraza ispisuje "true", jer je "b" globalna varijabla koja je dostupna izvan funkcije.

// 6. U procesu hoistinga svaka deklarisana promenljiva inicijalno dobija vrednost cega?

// U procesu hoistinga, svaka deklarirana varijabla inicijalno dobiva vrijednost "undefined".

// Hoisting je mehanizam u JavaScriptu koji podiže (elevates) deklaracije varijabli i funkcija na vrh (top) njihovog opsega (scope).
// To znači da se deklaracije varijabli i funkcija obrađuju prije nego što se izvršava ostatak koda.

// Kada se deklarira varijabla, ali se ne dodijeli joj vrijednost, u procesu hoistinga dobiva vrijednost "undefined".
// Ovo se događa jer se memorija alocira za varijablu, ali se ne inicijalizira s bilo kojom vrijednošću.
// Ako se varijabla kasnije koristi prije nego joj se dodijeli vrijednost, dobit će se "undefined".

// 7. Sta ce ispisati:
for (var i = 1; i <= 5; i++) {}

// Ovaj kod neće ispisati ništa u konzolu, jer ne sadrži nikakvu naredbu za ispis.

// Ovaj kod zapravo predstavlja petlju "for" koja se izvršava pet puta.
// Varijabla "i" inicijalizira se na 1, a zatim se provjerava uvjet "i <= 5".
// Ako je uvjet ispunjen, petlja se izvršava, a zatim se inkrementira varijabla "i" za 1.
// Nakon pet izvršavanja petlje, varijabla "i" će biti jednaka 6.

// Međutim, pošto petlja ne sadrži nikakvu naredbu, neće biti nikakvog ispisa u konzoli.
// Ako se u petlji dodaju neke naredbe, tada će se te naredbe izvršiti svaki put kad se petlja izvrši.

// 9. Sta ce ispisati:
for (var i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i);

// Ovaj kod će ispisati sljedeće:
// 0
// 1
// 2
// 3
// 4
// 5

// 10. Koji od sledecih linija pravi objekat unutar promenljive mojObj nepormenljivim
// (nije mu moguce promeniti vrednost svojstava, brisati postojeca svojstva, kao ni dodavati nova)?

Object.freezeKeys(mojObj);

Object.freeze(mojObj);

Object.seal(mojObj);

Object.preventExtensions(mojOBj);

// Funkcija Object.freeze(mojObj) pravi objekat unutar promenljive mojObj nepromenljivim,
// tj. neće biti moguće promeniti postojeća svojstva, brisati postojeća svojstva, kao ni dodavati nova svojstva.

// Funkcija Object.freezeKeys(mojObj) ne postoji u JavaScript-u.

// Funkcija Object.seal(mojObj) će napraviti objekat unutar promenljive mojObj nepromenljivim
// po pitanju brisanja svojstava i dodavanja novih, ali će još uvijek biti moguće promijeniti postojeća svojstva.

// Funkcija Object.preventExtensions(mojObj) će napraviti objekat unutar promenljive mojObj nepromenljivim
// po pitanju dodavanja novih svojstava, ali će još uvijek biti moguće mijenjati postojeća svojstva i brisati postojeća svojstva.

// 11.
// console.log(typeof typeof 5)
// string
