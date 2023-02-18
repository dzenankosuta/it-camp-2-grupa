// ZADACI

// 1.	(20) Uneti string se šifruje tako što se zamenjuje redosled znacima u stringu.
// Prvi i drugi zamene mesta, zatim 3. i 4. zamene mesta itd. Npr. za string 'Pera ima devojku', treba dobiti 'ePari amd vejouk'.
//  Ako string ima neparan broj znakova, poslednji znak se ne dira.

function menjanje(recenica) {
  let novaRecenica = "";
  for (let i = 0; i < recenica.length; i++) {
    if (recenica.length % 2 !== 0 && i === recenica.length - 1) {
      novaRecenica += recenica[i];
    } else if (i % 2 === 0) {
      novaRecenica += recenica[i + 1];
    } else if (i % 2 !== 0) {
      novaRecenica += recenica[i - 1];
    }
  }
  return novaRecenica;
}
console.log(menjanje("Pera ima devojku"));
console.log(menjanje("Pera ima devojku."));

// 2.	(20) Napraviti funkciju koja ima 2 obavezna parametra (niza).
// Napraviti pomoćni niz koji će sadrzati sve elemente oba niza.
// Napraviti jos jedan pomoćni niz koji ce iz prvog dodatnog niza sadržati parne brojeve ako je element tipa “number”, dok, ako je element string, treba sadržati one elemente čija je dužina neparna. U drugom pomoćnom nizu umetnuti na prva dva mesta 10 i 20.
//  Funkcija na kraju treba da vrati dva napravljena pomoćna niza.

const pomocniNiz = (arr1, arr2) => {
  const arr3 = arr1.concat(arr2);
  const arr4 = arr3.filter((el) => {
    if (el % 2 === 0 && typeof el === "number") {
      return el;
    } else if (el.length % 2 === 1 && typeof el === "string") {
      return el;
    }
  });
  return arr4;
};
console.log(pomocniNiz([1, 2, 3, 4], ["Mitar", "Mionav"]));

// 3.	(20) Shopping Cart.
// There are array of objects with all products that someone bought. In product object we got name, price per unit, and amount of units.
//  Your job is to loop throught array, and make new array of objects with two key-value pairs name and total price for that product.
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

const shipping = function (arr) {
  const arr2 = arr.map((element) => {
    return {
      name: element.name,
      totalValue: element.price * element.amount,
    };
  });
  let arr3 = arr2.map((element) => {
    return element.totalValue;
  });
  let suma = arr3.reduce((prev, curr) => {
    return prev + curr;
  });
  const shipping = 320;

  return `You got ${
    arr2.length
  } in cart, shipping cost is ${shipping}, your total is ${suma + shipping}.`;
};
console.log(shipping(CART_DATA));
