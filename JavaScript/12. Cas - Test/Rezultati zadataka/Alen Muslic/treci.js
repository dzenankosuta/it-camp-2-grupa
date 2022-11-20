// .	(20)
//  let recenica;
// recenica = “Nakon danasnjeg testa cemo znati ko ce nastaviti sa drugim ciklusom it campa”
//  Na osnovu date recenice napraviti i ispisati novu recenicu tako da:

// (i)	se svi samoglasnici pretvore u velika slova;
// (ii)	na kraju se doda ‘.’
// (iii)	ostali karakteri se ne menjaju.
// Dakle, treba se ispisati:
// “NAkOn dAnAsnjEg tEstA cEmO znAtI kO cE nAstAvItI sA drUgIm cIklUsOm It cAmpA.”

let recenica1 =
  "Nakon danasnjeg testa cemo znati ko ce nastaviti sa drugim ciklusom it campa";
let recenica2 = "";
for (i = 0; i < recenica1.length; i++) {
  if (
    recenica1[i] === "a" ||
    recenica1[i] === "e" ||
    recenica1[i] === "i" ||
    recenica1[i] === "o" ||
    recenica1[i] === "u"
  ) {
    recenica2 += recenica1[i].toUpperCase();
  } else {
    recenica2 += recenica1[i];
  }
}
console.log(recenica2 + ".");
