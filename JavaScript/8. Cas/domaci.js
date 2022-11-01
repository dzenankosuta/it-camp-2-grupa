// Preko switch naredbe:
// console.log(new Date().getDay());
// getDay() - daje vrednost 0-6
// switch (new Date().getDay())...
// Na osnovu vrednosti koju nam daje izraz iz switch naredbe, kroz case_ove i eventualno default ispisati poruku:
// "Danas je 'radni dan'"
// "Ugodno provedite vikend"

switch (new Date().getDay()) {
  case 1:
    console.log("Danas je ponedeljak");
    break;
  case 2:
    console.log("Danas je utorak");
    break;
  case 3:
    console.log("Danas je sreda");
    break;
  case 4:
    console.log("Danas je cetvrtak");
    break;
  case 5:
    console.log("Danas je petak");
    break;
  default:
    console.log("Ugodno provedite vikend.");
}
