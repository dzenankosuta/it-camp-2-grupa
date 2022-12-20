// Domaci zadatak:
// Napraviti funkciju koja ocekuje cetvorocifren broj, a vraca broj kojem su zamenjene prva i treca cifra, kao i druga i cetvrta cifra.
// 4752
// 5247

function menjajCifre(broj) {
  const strBroja = broj.toString();
  if (strBroja.length !== 4 || isNaN(strBroja)) {
    return `Dati argument mora biti cetvorocifren broj!`;
  } else {
    const prviDeo = strBroja.slice(0, 2);
    const drugiDeo = strBroja.slice(2);
    const noviBroj = drugiDeo.concat(prviDeo);
    return +noviBroj;
  }
}

console.log(menjajCifre(4752));
console.log(menjajCifre(1234));
console.log(menjajCifre(7501));
console.log(menjajCifre(75));
console.log(menjajCifre("nije broj"));
