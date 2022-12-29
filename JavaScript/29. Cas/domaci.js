// Napraviti funkciju koja racuna razliku u danima izmedju sledeca dva datuma:
// "1999-05-24" i "2004-09-15"

function funkcija(par1, par2) {
  return (Date.parse(par1) - Date.parse(par2)) / 86400000;
}
console.log(funkcija("2004 sep 15", "99 may 24"));
