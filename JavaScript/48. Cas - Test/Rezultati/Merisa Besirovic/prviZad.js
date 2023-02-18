// 1.	(20) Uneti string se šifruje tako što se zamenjuje redosled znacima u stringu. Prvi i drugi zamene mesta, zatim 3. i 4.
// zamene mesta itd. Npr. za string 'Pera ima devojku', treba dobiti 'ePari amd vejouk'.
//Ako string ima neparan broj znakova, poslednji znak se ne dira.

function izmeni(string) {
  let noviString = "";
  for (let i = 0; i < string.length; i++) {
    if (string.length % 2 === 1 && i === string.length - 1)
      noviString += string[i];
    else if (i % 2 === 0) noviString += string[i + 1];
    else if (i % 2 == 1) noviString += string[i - 1];
  }
  return noviString;
}
const rec = "Pera ima devojku";
console.log(izmeni(rec));
