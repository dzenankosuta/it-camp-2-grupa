// 1.	(20) Uneti string se šifruje tako što se zamenjuje redosled znacima u stringu. Prvi i drugi zamene mesta, zatim 3. i 4. zamene mesta itd. Npr. za string 'Pera ima devojku', treba dobiti 'ePari amd vejouk'. Ako string ima neparan broj znakova, poslednji znak se ne dira.
const zadatak1 = function (string) {
  let noviStr = "";
  if (typeof string !== "string") {
    return "Niste uneli string";
  }
  for (let i = 0; i < string.length; i++) {
    if (string.length % 2 !== 0 && string[i + 1] === undefined) {
      noviStr += string[i];
    } else if (i % 2 === 0) {
      noviStr += string[i + 1];
    } else {
      noviStr += string[i - 1];
    }
  }
  return noviStr;
};
console.log(zadatak1("Pera ima devojku"));
