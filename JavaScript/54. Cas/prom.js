const promis = new Promise((resolve, reject) => {
  resolve();
});

promis.then(() => {
  promis.then(() => {
    console.log("2");
  });
  console.log("1");
});
promis.then(() => {
  console.log("3");
});
// 132 Amer tacno odgovorio
// Prvo se izvrsavaju spoljasnje then-ovi, pa onda unutrasnji. Prvo se izvrsava 1, pa 3, pa 2.
