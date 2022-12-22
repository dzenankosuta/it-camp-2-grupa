// JavaScript Math Object  //

// Math Objekat nam dozvoljava da izvrsimo neke dodatne radnje sa brojevima.

// Math Properties (Konstante)

// Sintaksa je Math.Property.

// Math konstanti ima 8:

// 1.
// Math.E  - vraca Ojlerov Broj
console.log(Math.E);

// 2. Math.PI  - vraca vrednost pi
console.log(Math.PI);

// 3. Math.SQRT2 - vraca vrednost kvadratnog korena broja 2
console.log(Math.SQRT2);

// 4. Math.SQRT1_2 - vraca vrednost kvadratnog korena broja 1/2
console.log(Math.SQRT1_2);

// 5. Math.LN2 - Vraca vrednost logaritma osnove e broja 2
console.log(Math.LN2);

// 6. Math.LN10 - Vraca vrednost logaritma osnove e broja 10
console.log(Math.LN10);

// 7. Math.LOG2E - Vraca vrednost logaritma osnove 2 broja e
console.log(Math.LOG2E);

// 8. Math.LOG10E - Vraca vrednost logaritma osnove 10 broja e
console.log(Math.LOG10E);

// Math Methods //

// Sintaksa je:
// Math.method(number)

// Number to Integer:

// 1. Math.round() - vraca blizi ceo broj.

console.log(Math.round(22.23));
console.log(Math.round(22.74));

// 2. Math.ceil() - vraca sledeci ceo broj.
console.log(Math.ceil(22.22));
console.log(Math.ceil(-22.22));

// 3. Math.floor() - vraca prethodni ceo broj.
console.log(Math.floor(22.22));
console.log(Math.floor(-22.22));

// 4. Math.trunc() - vraca ceo broj bez decimalnog zapisa.
console.log(Math.trunc(22.22));
console.log(Math.trunc(-22.22));

// Math.sign(number) - vraca -1, 0 ili 1 u zavisnosti od toga kog je znaka broj.

console.log(Math.sign(22));
console.log(Math.sign(-22));
console.log(Math.sign(0));

// Math.pow(number, power) - vraca number stepenovan na power.

console.log(Math.pow(2, 3));
console.log(Math.pow(2, 9));

// Math.sqrt(number) - vraca kvadratni koren broja number.

console.log(Math.sqrt(9));
console.log(Math.sqrt(2));

// Math.abs(number) - Vraca apsolutnu vrednost nekog broja.

console.log(Math.abs(5));
console.log(Math.abs(-5));

// Math.sin(radians) - vraca vrednost sinusa (izmedju -1 i 1). Argument se posmatra kao vrednost u radijanima.

console.log(Math.sin(0));
console.log(Math.sin(Math.PI / 2));

// Math.cos(radians) - vraca vrednost kosinusa (izmedju -1 i 1). Argument se posmatra kao vrednost u radijanima.

console.log(Math.cos(0));
console.log(Math.cos(Math.PI / 2));

// 32. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.

const bliziSto = (num1, num2) => {
  const razlika1 = Math.abs(100 - num1);
  const razlika2 = Math.abs(100 - num2);
  const bliziBroj =
    razlika1 > razlika2 ? num2 : razlika1 < razlika2 ? num1 : null;
  if (bliziBroj === null) {
    return `Brojevi su jednako udaljeni od broja 100.`;
  } else {
    return `Blizi je broj ${bliziBroj}.`;
  }
};

console.log(bliziSto(120, 89));
console.log(bliziSto(120, -120));
console.log(bliziSto(99, 101));
console.log(bliziSto(0, 200));

//  Domaci:
// 1.
// Napraviti funkciju koja izracunava obim kruga, gde se
//  poluprecnik unosi od strane korisnika.

// 2.
// Napraviti funkciju koja izracunava povrsinu kruga, gde
//  precnik predstavlja argument funkcije.

// 3.
// Napraviti funkciju za pretvaranje radijana u stepene.
