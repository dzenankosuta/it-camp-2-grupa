// Domaci zadatak:
// Proveriti da li je uneti string palindrom (potpuno je isti kada se čita od pozadi). Npr. 'anavolimilovana' je palindrom.

function isPalindrom(rec) {
  let novaRec = "";
  // Pravljenje obrnutog stringa:
  for (let i = rec.length - 1; i >= 0; i--) {
    novaRec += rec[i];
  }
  if (rec === novaRec) {
    return "Data rec jeste palindrom.";
  } else {
    return "Data rec nije palindrom.";
  }
}

console.log(isPalindrom("obrnuto"));
console.log(isPalindrom("anavolimilovana"));
