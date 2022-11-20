// .	(20) Traziti od korisnika unos nekog realnog broja. Nakon toga ispisati u konzoli kvadrat tog broja (pozeljno je obuhvatiti slucaj kada korisnik ne unese odgovarajucu vrednost).

let unos = +prompt("Unesite neki realan broj.")
    if(isNaN(unos)){
        console.log("Morate uneti neki realan broj...")
    }
    else
    console.log(unos*unos)
