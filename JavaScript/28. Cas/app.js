// Date Objects //

// Kreiranje datuma //

// Kreiranje se vrsi preko new keyword

// Kreiranje datuma mozemo izvrsiti na 4 nacina:

// 1. new Date()

const trenutnoVreme = new Date();
console.log(trenutnoVreme);

// 2. new Date(year, month, day, hours, minutes, seconds, miliseconds)

// Meseci se racunaju od 0 do 11.
// Ako pravimo datume na ovaj nacin, moramo imati min 2 argumenta, a max 7.

const datumRodjenja = new Date(1996, 6, 24, 23, 15, 22, 5);
console.log(datumRodjenja);
let datum = new Date(2013, 7);
console.log(datum);

// 3. Slanjem jednog argumenta unutar Date().
// Ovako napravljen datum je zapravo dodat broj milisekundi na 1.1.1970.

// Defaultna vrednost za za datume u JavaScriptu je 1.1.1970T00:00:00.milisec.
datum = new Date(2022);
console.log(datum);

// 4. Slanjem stringa u Date() kao argument. String ce biti parse_ovan i dobicemo datum na osnovu toga.

datum = new Date("2017 January 25");
console.log(datum);

// Jedna i dve cifre godine ce biti interpretirane kao:
// 19xx ili 190x.

datum = new Date(86, 0);
console.log(datum);

datum = new Date(6, 0);
console.log(datum);

// Date.now() je metoda koja nam vraca broj milisekundi od 1.1.1970. do trenutnog vremena.
const datum2 = Date.now();
console.log(datum2);

// Date.parse(nekiDatum) nam vraca broj milisekundi
// od 1.1.1970. do poslatog datuma.
console.log(Date.parse(datumRodjenja));

// Napraviti funkciju koja racuna razliku u danima izmedju sledeca dva datuma:
// "1999-05-24" i "2004-09-15"
