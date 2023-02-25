const zbir = (a, b) => {
  console.log(a + b);
};

const num = 55;

// JavaScript moduli nam dozvoljavaju da podelimo nas kod u odvojene fajlove.

// Oni se oslanjaju na 2 naredbe (statements):
// import
// export

// Postoje dva nacina eksportovanja neke funkcije, promenljive:
// 1. default export
// 2. export

export default zbir;
export { num };
