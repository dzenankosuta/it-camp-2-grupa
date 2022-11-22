// 1.	(20) Traziti od korisnika unos nekog realnog broja. Nakon toga ispisati u konzoli kvadrat tog broja (pozeljno je obuhvatiti slucaj kada korisnik ne unese odgovarajucu vrednost).


let broj = +prompt("Unesite neki realan broj: ");

if (isNaN(broj)) {
    console.log("Uneli ste nekorektan broj!!!")
} else{
    console.log("Kvadrat unetog broja iznosi" +" "+ broj**2);
}