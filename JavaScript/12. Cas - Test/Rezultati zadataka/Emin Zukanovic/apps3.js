let recenica;
recenica = "Nakon danasnjeg testa cemo znati ko ce nastaviti sa ciklusom it kampa"

let novo = ""
let duzina = recenica.length
for (let i=0;i<duzina;i++) {
    if(recenica[i]==="a" || recenica[i]==="e" || recenica[i]==="i" || recenica[i]==="o" || recenica[i]==="u") {
        novo+=recenica[i].toUpperCase()
    } else 
    novo+=recenica[i]
}
console.log(novo + ".")