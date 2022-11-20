let recenica =
  "Nakon danasnjeg testa cemo znati ko ce nastaviti sa drugim ciklusom it campa";
let nova = "";
for (i = 0; i < recenica.length; i++) {
  if (
    recenica[i] === "a" ||
    recenica[i] === "e" ||
    recenica[i] === "i" ||
    recenica[i] === "o" ||
    recenica[i] === "u"
  ) {
    nova += recenica[i].toUpperCase();
  } else nova += recenica[i];
}
console.log(nova + ".");
