// Za unete nizove A od N i B od M celih brojeva, treba ispisati M elemenata niza A onim redosledom kako je navedeno u nizu B (pomocniB).
// Pre svega filtrirati niz B (treba izbaciti sve vrednosti koje su vece ili jednake duzini niza A). Nakon toga Odraditi zadatak za pomocniB i A.
// Npr. A=[23,52,38,44] i B=[3,1,1,2], ispisuje se 38, 23, 23, 52.

const newOne = (A, B) => {
  const pomocniB = B.filter((element) => element < A.length);
  const C = [];
  for (let i = 0; i < pomocniB.length; i++) {
    C.push(A[pomocniB[i]]);
  }
  return C;
};

console.log(newOne([23, 52, 38, 44], [3, 1, 1, 2]));

// Za uneti niz od N numeričkih vrednosti, prebrojati koliko ima elemenata koji su duplo veći od prethodnog i za 10 manji od sledećeg elementa u nizu.

const brojac = (arr) => {
  let brojac = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === 2 * arr[i - 1] && arr[i] === arr[i + 1] - 10) {
      brojac++;
    }
  }
  return brojac;
};
console.log(brojac([10, 20, 30, 60, 70]));
