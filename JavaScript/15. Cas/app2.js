// STRINGOVI //
// Stringovi su immutable vrednosti (nepromenljive).
// Sto znaci da ako hocemo neki slican string da dobijemo moramo napraviti novi.

// Metode (funkcije koje primenjujemo za datu promenljivu) //
// length metoda nam sluzi za dobijanje duzine stringa.
const recenica = "Kamerun dobijamo!";
console.log(recenica.length);

// Pristupanje odredjenom karakteru ide preko indeksa.
// Indeksiranje ide od 0 do (ukupna duzina stringa - 1)
console.log(recenica[6]);

// Koriscenje \ (backslash) karaktera.

// String zapisujemo na 3 nacina:
// 1. " "
// Rec koja treba da se nadje pod navodnicima more biti pod obicnim navodnicima
// ako je string okruzen duplim navodnicima ili obrnuto.
const string1 = "Danas je bilo 'lepo' vreme."
// const string1 = 'Danas je bilo "lepo" vreme.'
// \:
const string4 = "Danas je bilo \"lepo\" vreme."
console.log(string4)
// 2. ' '
const string2 = 'Danas je bilo lepo vreme.'
// 3. ` `
const string3 = `Danas je bilo lepo vreme.`

// \ na kreju reda:
const string5 = "Ovo ce da bude jedan dugacki string. \
Cela poenta je da prikazemo jedan te isti string u vise redova."
console.log(string5)
// sa \ ne mozemo nastaviti liniju koda, vec samo string
// \n prikazivanje stringa:
const string6 = "Ovo ce da bude jedan dugacki string. \nCela poenta je da prikazemo \njedan te isti string u vise redova."
console.log(string6)

// Postoje 3 metode za ekstraktovanje (uzimanje dela stringa) stringa:
// 1. slice(start, end) end nije ukljucen u opseg.
// 2. substring(start, end) razlika u odnosu na slice je da substring ne 
// prihvata negativne indekse.
// 3. substr(start, length)

// Racunanje ide od 0.

const string7 = "Danas je bilo lepo vreme."
console.log(string7.slice(0,5))
console.log(string7.slice(-6, -1))

console.log(string7.substring(0,5))

console.log(string7.substr(0,8))