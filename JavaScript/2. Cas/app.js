// JavaScript moze prikazati podatke na nekoliko nacina:

// 1. innerHTML
document.getElementById("p").innerHTML = "Paragraf"

// 2. write()
document.write() // najcesci nacin za testiranje nekog koda

// 3. alert() - upozorenje
alert("Zdravo")

// 4. console.log() - ispisivanje u konzoli
console.log("Poruka za ispis u konzoli.")

// Pravila nazivanja promenljivih:

// Promenljiva u JavaScriptu mora poceti sa nekim od sledecih znakova:

// 1. Slovo (veliko ili malo) A-Z, a-z
// 2. $ znak moze biti pocetni karakter neke promenljive,
// 3. _ 

// Broj moze biti sadrzan u nazivu neke promenljive,
// ALI PROMENLJIVA NE SME POCINJATI BROJEM.

// prom1 = "neki string" jeste korektno
// 2prom = "neki string" nije korektno

// prosek ocena = 4.14 
prosekOcena = 4.14 // preporucljiv nacin zapisivanja promenljive
prosek_ocena = 4.14 // korektno
ProsekOcena = 4.14 // korektno

// Postoje 4 nacina za deklarisanje neke promenljive:

// 1. Dodeljivanje vrednosti bez da smo prethodno izvrsili deklaraciju:
//  prom = 12 

// 2. Koriscenjem var keyword (rezervisane reci) -
// var je koriscena na starijim browserima (sve se manje koristi)
// var a = 5

// 3. Koriscenjem let keyword (rezervisane reci) - 
// let se najcesce koristi kada postoji sansa da se 
// vrednost date promenljive menja.

// 4. Koriscenjem const keyword (rezervisane reci) - 
// const se koristi za definisanje konstanti 
// koje nece menjati vrednost.

// Promenljive (varijable) predstavljaju kontejnere 
// za skladistenje vrednosti.