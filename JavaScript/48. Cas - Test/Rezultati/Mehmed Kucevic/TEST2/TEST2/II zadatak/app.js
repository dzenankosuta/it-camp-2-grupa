function pomocniNizovi(niz1, niz2) {
  const pomocniNiz = niz1.concat(niz2);
  const parniBrojeviIneparniStringovi = [];
  for (var i = 0; i < pomocniNiz.length; i++) {
    const element = pomocniNiz[i];
    if (typeof element === "number" && element % 2 === 0) {
      parniBrojeviIneparniStringovi.push(element);
    } else if (typeof element === "string" && element.length % 2 === 1) {
      parniBrojeviIneparniStringovi.push(element);
    }
  }

  parniBrojeviIneparniStringovi.splice(0, 0, 10, 20);

  return [pomocniNiz, parniBrojeviIneparniStringovi];
}

console.log(pomocniNizovi([1, 2, "tri", 4, "pet"]), [3, "sedam", 5]);
