// 1.	(20) Traziti od korisnika unos nekog realnog broja. Nakon toga ispisati u konzoli kvadrat tog broja (pozeljno je obuhvatiti slucaj kada korisnik ne unese odgovarajucu vrednost).

const broj = +prompt("Unesite neki realan broj:")

if(isNaN(broj)) {
    console.log("Uneta vrednost mora biti broj")
} else {
    console.log("Kvadrat unetog broja je" + " " + broj * broj + ".")
}