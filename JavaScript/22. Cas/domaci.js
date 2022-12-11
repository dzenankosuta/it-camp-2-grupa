// Domaci zadatak:
// Izdvojiti N znakova sa desne strane (poslednjih N znakova) unetog stringa. Npr. za string 'Pera ima devojku' i N=5, dobija se 'vojku'.

const task = (recenica, n) => {
  const poslednjihN = recenica.slice(-n);
  return poslednjihN;
};

console.log(task("Pera ima devojku", 5));
