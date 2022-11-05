// Na osnovu unete recenice od strane korisnika ispisati recenicu tako da svaki karakter ide jedan ispod drugog. Dok ako je neki karakter = "a", neka se ispise broj 5. A u slucaju da je karakter jednak "s", neka se ne ispise nista.

const recenica = prompt("Unesite neku recenicu: ");
const duzina = recenica.length;
for (let i = 0; i < duzina; i++) {
  if (recenica[i] === "a") {
    console.log(5);
  } else if (recenica[i] === "s") {
    continue;
  } else {
    console.log(recenica[i]);
  }
}
