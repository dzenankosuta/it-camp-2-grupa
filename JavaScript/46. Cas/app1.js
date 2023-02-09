const person = {
  firstName: "Bakir",
  lastName: "Ujkanovic",
  age: 19,
};

const person2 = person;

const person3 = { ...person, firstName: "Hamed" };
console.log(person3);

// 1.  Iz 2 poslata niza vratiti 3. niz koji ce sadrzati one elemente iz oba niza koji nisu sadrzani u onom drugom nizu.
const niz1 = [1, 3, 4, 5, 6, 7, 9];
const niz2 = [2, 4, 5, 6, 8, 10];

const difference = (arr1, arr2) => {
  const helper1 = niz1.filter((element) => !arr2.includes(element));
  const helper2 = niz2.filter((element) => !arr1.includes(element));
  const third = [...helper1, ...helper2];
  third.sort((a, b) => a - b);
  return third;
  //   return {
  //     helper1,
  //     helper2,
  //   };
};

console.log(difference(niz1, niz2));

//  2. Zadatak
// Napraviti funkciju koja ispituje neki niz (argument).
// Ako produkt ima u zalihama vise od 20 treba:
// Treba datom produktu smanjiti cenu za 20%
// Ako produkt ima u zalihama vise od 40 treba:
// Treba datom produktu smanjiti cenu za 40%
// U slucaju da u zalihama ima 20 i manje kolicine,
// cena se ne menja.

const products = [
  {
    id: 1,
    name: "ARSENAL 22/23 HOME JERSEY",
    price: 50,
    imgUrl:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/450ddf1b5943474fa472ae25009dfed0_9366/ARSENAL_22-23_HOME_JERSEY_Y_Red_HA5339_01_laydown.jpg",
    currency: "EUR",
    quantity: 41,
  },
  {
    id: 2,
    name: "ARSENAL CONDIVO 22 TRAINING TOP",
    price: 65,
    imgUrl:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/32f9a996849147b284c1ae94009678a1_9366/Arsenal_Condivo_22_Training_Top_Blue_HC1252_01_laydown.jpg",
    currency: "EUR",
    quantity: 12,
  },
  {
    id: 3,
    name: "ARSENAL BEANIE",
    price: 23,
    imgUrl:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d8589fb63d02499db805ae7a00cf5273_9366/Arsenal_Beanie_Black_HM9965_01_standard.jpg",
    currency: "EUR",
    quantity: 7,
  },
  {
    id: 4,
    name: "ARSENAL ANTHEM JACKET",
    price: 120,
    imgUrl:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2db81ab8d14d4817a659ae8c01155d2e_9366/Arsenal_Anthem_Jacket_Blue_HF4030_21_model.jpg",
    currency: "EUR",
    quantity: 36,
  },
  {
    id: 5,
    name: "ARSENAL TRAVEL HOODIE",
    price: 85,
    imgUrl:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/44d076827f3d4ea08c6bae85012f97bc_9366/Arsenal_Travel_Hoodie_Black_HF4031_01_laydown.jpg",
    currency: "EUR",
    quantity: 0,
  },
  {
    id: 6,
    name: "ARSENAL FC 93-94 JERSEY",
    price: 85,
    imgUrl:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/edf2037f434d46479c96adbd0085ce75_9366/Arsenal_FC_93-94_Jersey_Yellow_HK5626_01_laydown.jpg",
    currency: "EUR",
    quantity: 68,
  },
  {
    id: 7,
    name: "ARSENAL DNA CAP",
    price: 23,
    imgUrl:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/80b51f1feee344479c1eae760142da56_9366/Arsenal_DNA_Cap_Black_HM9968_01_standard.jpg",
    currency: "EUR",
    quantity: 4,
  },
  {
    id: 8,
    name: "ARSENAL TRAVEL BACKPACK",
    price: 65,
    imgUrl:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c7371783770f41e98afeae9a00a5a2c1_9366/Arsenal_Travel_Backpack_Black_HM9967_01_standard.jpg",
    currency: "EUR",
    quantity: 14,
  },
];

const discount = (arr) => {
  const newArr = arr.map((element) => {
    if (element.quantity > 40) {
      element.price *= 0.6;
      return element;
    } else if (element.quantity > 20) {
      element.price *= 0.8;
      return element;
    } else {
      return element;
    }
  });
  return newArr;
};

console.log(discount(products));

// 38. Write a JavaScript function to move an array element from one position to another. Go to the editor

// Test Data :
// console.log(move([10, 20, 30, 40, 50], 0, 2));
// [20, 30, 10, 40, 50]
// console.log(move([10, 20, 30, 40, 50], -1, -2));
// [10, 20, 30, 50, 40]

// splice(arg1, arg2, arg3, arg4, ...)
// splice(4,2)

const move = (arr, pos1, pos2) => {
  const element = arr[pos1];
  arr.splice(pos1, 1);
  arr.splice(pos2, 0, element);
  return arr;
};
console.log(move([10, 20, 30, 40, 50], 0, 2));

// Domaci:
// 34. Write a JavaScript function to get nth largest element from an unsorted array. Go to the editor

// Test Data :
// console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
// 89

// 39. Write a JavaScript function to filter false, null, 0 and blank values from an array. Go to the editor

// Test Data :
// console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
// [58, "abcd", true]

// 16. Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys.

// 3. Write a JavaScript program to get the length of a JavaScript object. Go to the editor
// Sample object :
const student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};
