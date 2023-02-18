// 1.	(20) Uneti string se šifruje tako što se zamenjuje redosled znacima u stringu. Prvi i drugi zamene mesta, zatim 3. i 4. zamene mesta itd. Npr. za string 'Pera ima devojku', treba dobiti 'ePari amd vejouk'. Ako string ima neparan broj znakova, poslednji znak se ne dira.

// 2.	(20) Napraviti funkciju koja ima 2 obavezna parametra (niza).
// Napraviti pomoćni niz koji će sadrzati sve elemente oba niza.
// Napraviti jos jedan pomoćni niz koji ce iz prvog dodatnog niza sadržati parne brojeve ako je element tipa “number”, dok, ako je element string, treba sadržati one elemente čija je dužina neparna. U drugom pomoćnom nizu umetnuti na prva dva mesta 10 i 20.
//  Funkcija na kraju treba da vrati dva napravljena pomoćna niza.

// 3.	(20) Shopping Cart.
// There are array of objects with all products that someone bought. In product object we got name, price per unit, and amount of units. Your job is to loop throught array, and make new array of objects with two key-value pairs name and total price for that product.
// After you did the job with new array, you need to sum all prices of every product and return total sum value, and add a FIXED 320 shipping costs.
// After all of that you should print in console following statement:
// 'You got ${num of products} in cart, shipping cost is ${shipping cost}, your total is ${total}.'

const CART_DATA = [
  {
    id: 1,
    name: "Hawai Shirt",
    price: 30,
    amount: 2,
    categorty: "summer",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Adidas Slippers",
    price: 35,
    amount: 1,
    categorty: "summer",
    rating: 4.5,
  },
  {
    id: 6,
    name: "White T-Shirt",
    price: 15,
    amount: 4,
    categorty: "summer",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Summer hat",
    price: 7.5,
    amount: 3,
    categorty: "summer",
    rating: 40,
  },
];

//1.
function zamena(recenica) {
  length = recenica.length;
  let novarecenica = "";
  for (i = 0; i < length; i++) {
    if (length % 2 === 1 && i === length - 1) {
      novarecenica += recenica[length - 1];
    } else if (i % 2 === 0) {
      novarecenica += recenica[i + 1];
    } else if (i % 2 === 1) {
      novarecenica += recenica[i - 1];
    }
  }
  return novarecenica;
}
console.log(zamena("Pera ima devojku"));

//2.
function nizovi(niz1, niz2) {
  const pomocni = [];
  const pomocni1 = [];

  for (i = 0; i < niz1.length + niz2.length; i++) {
    if (i < niz1.length) pomocni.push(niz1[i]);
    else pomocni.push(niz2[i - niz1.length]);
  }
  for (i = 0; i < pomocni.length; i++) {
    if (pomocni[i] != isNaN && pomocni[i] % 2 === 0) pomocni1.push(pomocni[i]);
    else if (typeof pomocni[i] == typeof "ab" && pomocni[i].length % 2 === 1)
      pomocni1.push(pomocni[i]);
  }
  pomocni1.unshift(10, 20);
  return [pomocni, pomocni1];
}
console.log(nizovi([1, "abc", NaN], [4, 5, 6]));

//3.
function kartica(obj) {
  let duzina = 0;
  for (let i in obj) duzina++;
  const novi = obj.map((element) => {
    return {
      name: element.name,
      total: element.price * element.amount,
    };
  });
  const shipping_cost = 320;
  let suma = 0;
  for (i = 0; i < duzina; i++) {
    suma += novi[i].total;
  }
  suma += 320;
  return `You got ${duzina} in cart, shipping cost is ${shipping_cost}, your total is ${suma}.`;
}
console.log(kartica(CART_DATA));
