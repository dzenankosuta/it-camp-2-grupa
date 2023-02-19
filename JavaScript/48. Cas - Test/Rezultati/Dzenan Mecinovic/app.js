// ZADACI

/* 1.	(20) Uneti string se šifruje tako što se zamenjuje redosled znacima u stringu. Prvi i drugi zamene mesta, zatim 3. i 4. zamene mesta itd. Npr. za string 'Pera ima devojku', treba dobiti 'ePari amd vejouk'. Ako string ima neparan broj znakova, poslednji znak se ne dira.
2.	(20) Napraviti funkciju koja ima 2 obavezna parametra (niza).
Napraviti pomoćni niz koji će sadrzati sve elemente oba niza.
Napraviti jos jedan pomoćni niz koji ce iz prvog dodatnog niza sadržati parne brojeve ako je element tipa “number”, dok, ako je element string, treba sadržati one elemente čija je dužina neparna. U drugom pomoćnom nizu umetnuti na prva dva mesta 10 i 20.
 Funkcija na kraju treba da vrati dva napravljena pomoćna niza.
3.	(20) Shopping Cart.
There are array of objects with all products that someone bought. In product object we got name, price per unit, and amount of units. Your job is to loop throught array, and make new array of objects with two key-value pairs name and total price for that product.
After you did the job with new array, you need to sum all prices of every product and return total sum value, and add a FIXED 320 shipping costs.
After all of that you should print in console following statement:
'You got ${num of products} in cart, shipping cost is ${shipping cost}, your total is ${total}.'
*/

/* 1.	(20) Uneti string se šifruje tako što se zamenjuje redosled znacima u stringu. Prvi i drugi zamene mesta, zatim 3. i 4. zamene mesta itd. Npr. za string 'Pera ima devojku', treba dobiti 'ePari amd vejouk'. Ako string ima neparan broj znakova, poslednji znak se ne dira.
 */

function prvi(str) {
  let ispis = "";
  for (let i = 0; i < str.length; i++) {
    if (str.length % 2 !== 0 && i === str.length - 1) {
      // ako je duzina stringa neparna, na poslednjem mestu dodaj str[i]
      ispis += str[i];
    } else if (i % 2 === 0) {
      ispis += str[i + 1];
    } else if (i % 2 !== 0) {
      ispis += str[i - 1];
    }
  }
  return ispis;
}
console.log(prvi("Pera ima devojku"));

// 2.	(20) Napraviti funkciju koja ima 2 obavezna parametra (niza).
// Napraviti pomoćni niz koji će sadrzati sve elemente oba niza.
// Napraviti jos jedan pomoćni niz koji ce iz prvog dodatnog niza sadržati parne
//  brojeve ako je element tipa “number”, dok, ako je element string, treba sadržati one elemente čija je dužina neparna.
// U drugom pomoćnom nizu umetnuti na prva dva mesta 10 i 20.
//  Funkcija na kraju treba da vrati dva napravljena pomoćna niza.

function drugi(prvi, drugi) {
  const pomocni = prvi.concat(drugi);
  const drugiPomocni = [];
  for (let i of pomocni) {
    if (typeof i == typeof 4 && i % 2 == 0) {
      drugiPomocni.push(i);
    }
    if (typeof i == typeof "string" && i.length % 2 !== 0) {
      drugiPomocni.push(i);
    }
  }
  drugiPomocni.unshift(20);
  drugiPomocni.unshift(10);
  return drugiPomocni;
}
console.log(drugi([1, 2, 4, 5], ["jedan", "dva"]));

/* 3.	(20) Shopping Cart.
There are array of objects with all products that someone bought.
In product object we got name, price per unit, and amount of units.
Your job is to loop throught array, and make new array of objects with two key-value pairs name and total price for that product.
After you did the job with new array, you need to sum all prices of every product and return total sum value, and add a FIXED 320 shipping costs.
After all of that you should print in console following statement:
'You got ${num of products} in cart, shipping cost is ${shipping cost}, your total is ${total}.'
*/

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

function treci(arr) {
  const novi = [];
  const prices = [];
  for (let i of arr) {
    novi.push(i.name); // name
    novi.push(i.price * i.amount); // total
    prices.push(i.price * i.amount); // total print for reduce() method
    // console.log(prices);
  }
  return `You got ${
    arr.length
  } in cart, shipping cost is ${320}, your total is ${
    prices.reduce((a, b) => a + b) + 320
  }.`;
}
console.log(treci(CART_DATA));
