// 1.	(20) Uneti string se šifruje tako što se zamenjuje redosled znacima u stringu. Prvi i drugi zamene mesta, zatim 3. i 4. zamene mesta itd. Npr. za string 'Pera ima devojku', treba dobiti 'ePari amd vejouk'. Ako string ima neparan broj znakova, poslednji znak se ne dira.

function zamena(string) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (string.length % 2 !== 0 && i === string.length - 1) {
      //ovo i === string.length-1 zbog poslednjeg karaktera jer kad se loga neparna duzina stringa, on vraca samo poslednji karakter!
      newString += string[string.length - 1];
    } else if (i % 2 == 0) {
      newString += string[i + 1];
    } else if (i % 2 !== 0) {
      newString += string[i - 1];
    }
  }
  return newString;
}

console.log(zamena("Pera ima devojku"));
