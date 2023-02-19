// 1.	(20) Uneti string se šifruje tako što se zamenjuje redosled znacima u stringu. Prvi i drugi zamene mesta, zatim 3. i 4. zamene mesta itd. Npr. za string 'Pera ima devojku', treba dobiti 'ePari amd vejouk'. Ako string ima neparan broj znakova, poslednji znak se ne dira. //
const prvizadatak = () => {
  const recenica1 = prompt("Unesite neku recenicu:");
  let duzina = recenica1.length;
  let novarecenica = "";
  for (let i = 0; i < duzina; i++)
    if (duzina % 2 === 1 && i === duzina - 1) {
      novarecenica += recenica1[i];
    } else if (i % 2 === 0) {
      novarecenica += recenica1[i + 1];
    } else if (i % 2 === 1) novarecenica += recenica1[i - 1];
  return nova;
};
console.log(prvizadatak());
