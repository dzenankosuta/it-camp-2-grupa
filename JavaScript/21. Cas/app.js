// 1.	Za uneti string A treba kreirati novi string B koji se sastoji od prve i poslednje reči (odvojenih razmakom) unetog stringa. Npr. za A='Svuda pođi, kući dođi', dobija se B='Svuda dođi'. Podrazumeva se da uneti string nema vodeće ili prateće razmake.

const prvaIPoslednja = function (recenica) {
  const pozicijaPrvogRazmaka = recenica.indexOf(" ");
  const prvaRec = recenica.slice(0, pozicijaPrvogRazmaka);
  const pozicijaPoslednjegRazmaka = recenica.lastIndexOf(" ");
  const poslednjaRec = recenica.slice(pozicijaPoslednjegRazmaka + 1);
  const recenica2 = prvaRec.concat(" ", poslednjaRec);
  return recenica2;
};

console.log(prvaIPoslednja("Hocemo prvu i poslednju rec."));

// 2.	Za uneti string A, treba izdvojiti podstring B, koji počinje od unete pozicije N i ima M znakova. Npr. za string 'Pera ima devojku', N=6 i M=7, dobija se B='ima dev'.

const podString = (string, pocetak, duzina) => {
  const noviString = string.substr(pocetak, duzina);
  return noviString;
};

console.log(podString("Recenica kojoj cemo uzeti nekoliko karaktera", 5, 9));

// 3.	Unosi se string A i znak Z. Kreirati novi string B koji se dobija tako što se iz unetog stringa izbacuje svaka pojava znaka Z. Npr. za unet string "Madagaskar" i znak "a", dobijamo rezultat "Mdgskr"

const bezZnaka = (string, znak) => {
  //   const noviString = string.replace(/znak/g , "");
  let noviString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== znak) {
      noviString += string[i];
    }
  }
  return noviString;
};

console.log(bezZnaka("Madagaskar", "a"));

// Domaci zadatak:
// Izdvojiti N znakova sa desne strane (poslednjih N znakova) unetog stringa. Npr. za string 'Pera ima devojku' i N=5, dobija se 'vojku'.
