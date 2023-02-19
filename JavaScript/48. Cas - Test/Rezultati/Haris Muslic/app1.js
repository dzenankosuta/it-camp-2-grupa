// (20) Uneti string se šifruje tako što se zamenjuje redosled znacima u stringu. Prvi i drugi zamene mesta, zatim 3. i 4. zamene mesta itd. Npr. za string 'Pera ima devojku', treba dobiti 'ePari amd vejouk'. Ako string ima neparan broj znakova, poslednji znak se ne dira.

const rec = "Pera ima devojku";

function menjanje(arr1) {
  duzina = arr1.length;
  let novaRec = [];
  for (let i = 0; i < duzina; i++) {
    if (i % 2 === 0) {
      novaRec += rec[i + 1];
    } else if (i % 2 !== 0) {
      novaRec += rec[i - 1];
    }
  }
  return novaRec;
}

console.log(menjanje(rec));
