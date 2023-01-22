const prom1 = 55; //55
const prom2 = !55; //false
const prom3 = !!55; //true

const prom4 = !!true; //true
const prom5 = !""; //true
const prom6 = !(55 + ""); //false

console.log(prom1);
console.log(prom2);
console.log(prom3);
console.log(prom4);
console.log(prom5);
console.log(prom6);

// x = 15;
// let y = 16;

// console.log(x + y);

add(10, 15);

function add(a, b) {
  console.log(a + b);
}

hello("Mehmede");

const hello = (par) => {
  console.log(`Hello ${par}`);
};
