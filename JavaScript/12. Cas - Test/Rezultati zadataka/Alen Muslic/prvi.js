// 20) Traziti od korisnika unos nekog realnog broja. Nakon toga ispisati u konzoli kvadrat tog broja (pozeljno je obuhvatiti slucaj kada korisnik ne unese odgovarajucu vrednost).

let broj = +prompt("Unesite broj:");
if (isNaN(broj)) {
  console.log("Morate uneti broj");
}
console.log(broj * broj);
