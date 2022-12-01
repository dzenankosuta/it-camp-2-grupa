// Domaci zadatak.
// Napraviti funkciju koja trazi od korisnika da unese neku recenicu, zatim funkcija vraca,
//  datu recenicu u vise oblika (spojenu u jedan string).
// 1. recenicu ispisanu velikim slovima,
// 2. recenicu ispisanu malim slovima,
// 3. pola recenice ispisano velikim slovima, pola recenice ispisano malim slovima
// 4. Ako se u recenici nadje rec 'skola' neka bude zamenjena recju fakultet,
// 5. Neka bude ispisano prvih 10 karaktera unete recenice,
// 6. Neka bude ispisano poslednjih 10 karaktera unete recenice.

const domaci = () => {
  const recenica = prompt("Unesite neku recenicu: ");
  let polaDuzine;
  //   if (recenica.length % 2 === 0) {
  //     polaDuzine = recenica.length / 2;
  //   } else {
  //     polaDuzine = Math.round(recenica.length / 2);
  //   }
  polaDuzine =
    recenica.length % 2 === 0
      ? recenica.length / 2
      : Math.round(recenica.length / 2);
  const prva = recenica.toUpperCase();
  const druga = recenica.toLowerCase();
  const prvaPol = recenica.slice(0, polaDuzine).toUpperCase();
  const drugaPol = recenica
    .substring(polaDuzine, recenica.length)
    .toLowerCase();
  //   const treca = prvaPol + drugaPol;
  const treca = prvaPol.concat(drugaPol);
  const cetvrta = recenica.replace(/skola/gi, "fakultet");
  const peta = recenica.substr(0, 10);
  const sesta = recenica.slice(-10);
  return prva.concat(
    "\n",
    druga,
    "\n",
    treca,
    "\n",
    cetvrta,
    "\n",
    peta,
    "\n",
    sesta
  );
};

// Izostavljajuci drugi argument kod slice() metode se uzima isecak do kraja stringa.
// const isecak = "Recenica za primenu slice metode jednim argumentom.".slice(12);
// console.log(isecak);
console.log(domaci());
