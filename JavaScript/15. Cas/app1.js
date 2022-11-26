// TRUTHY AND FALSY VALUES
const isSunny = false;
// Kraca sintaksa!
if (isSunny) {
  console.log("Napolju je suncano.");
} else {
  console.log("Napolju je kisa.");
}

// Postoji samo 8 FALSY vrednosti i one su:
// 1.  false
// 2.  ""
// 3.   0
// 4.  -0
// 5.  0n
// 6.  undefined
// 7.  null
// 8.  NaN

// Napraviti funkciju gde se trazi unos od strane korisnika i vraca poruka da li je uneta vrednost TRUTHY ili FALSY vrednost.

function isTruthy() {
  const vrednost = +prompt("Unesite nesto: ");
  if (vrednost) {
    return "Uneta je TRUTHY vrednost.";
  } else {
    return "Uneta je FALSY vrednost.";
  }
}
console.log(isTruthy());
