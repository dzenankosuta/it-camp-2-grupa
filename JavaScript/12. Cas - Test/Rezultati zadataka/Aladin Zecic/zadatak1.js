// (20) Traziti od korisnika unos nekog realnog broja. Nakon toga ispisati u 
//konzoli kvadrat tog broja (pozeljno je obuhvatiti slucaj kada korisnik ne unese odgovarajucu vrednost).
let broj=+prompt("unesi realan broj")

if(isNaN(broj)){
        console.log("lose unet broj")
    }
    else console.log(broj*broj)
    