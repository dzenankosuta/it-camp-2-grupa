// every() metoda proverava da li su svi elementi niza zadovoljili uslov.
// every() metoda vraca boolean.

// Da li su svi u grupi punoletni?
const godine = [16, 19, 18, 19, 15, 17, 17, 21, 20];
const isEveryAdult = godine.every((godina) => godina > 17);
console.log(isEveryAdult);

const niz = [
  "Tarik",
  "Bakir",
  "Haris",
  "Aladin",
  "Hamed",
  "Mehmed",
  "Hatidza",
  "Hasan",
  "Miona",
  "Mitar",
];
const isEveryName = niz.every((name) => name.length >= 5);
console.log(isEveryName);

// some() metoda proverava da li bar jedan element niza zadovoljava uslov.
// some() metoda vraca boolean.

const isSomeName = niz.some((name) => name.length === 9);
console.log(isSomeName);

const isSomeName2 = niz.some((name) => name.length === 7);
console.log(isSomeName2);

const check = (arr) => {
  for (let el of arr) {
    if (el.length === 7) {
      return true;
    } else {
      continue;
    }
  }
  return false;
};
console.log(check(niz));
console.log(
  check(["nije sedam karaktera", "opet nije sedam karaktera", "i jos jednom"])
);

// find() metoda vraca vrednost prvog elementa koji je prosao test funkcije.
const brojevi = [4, 9, 16, 25, 29];

// Koji je prvi element niza veci od 18:
const firstEl = brojevi.find((br) => br > 18);
console.log(firstEl);

// Ako nijedan element nije zadovoljio uslov find metoda vraca undefined.
const firstEl2 = brojevi.find((br) => br > 30);
console.log(firstEl2);

// findIndex() metoda vraca index prvog elementa koji je zadovoljio uslov.
// Ako nijedan element nije zadovoljio uslov findIndex metoda vraca -1.

const firstIndex = brojevi.findIndex((br) => br > 18);
console.log(firstIndex);

const firstIndex2 = brojevi.findIndex((br) => br > 30);
console.log(firstIndex2);

const nestoPojmaNemamSta = Array.from("ABCDE");
console.log(nestoPojmaNemamSta);

// Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

const removeDuplicates = (arr) => {
  const newArr = [];
  for (let el of arr) {
    if (
      (typeof el === "string" &&
        newArr.some((element) => element.toLowerCase() === el.toLowerCase())) ||
      newArr.some((element) => element === el)
    ) {
      continue;
    } else {
      newArr.push(el);
    }
  }
  return newArr;
};
console.log(removeDuplicates([1, 1, 3, 4, 5, 6, 7, 3]));
console.log(removeDuplicates(["Alen", "alen", "aleN", "Mitar", "miTar"]));

//  We have the following arrays : Go to the editor
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["st", "nd", "rd", "th"];
// Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."

const newArr = color.map((element, index) => {
  if (index === 0) {
    return "1" + o[index] + " choice is " + element;
  } else if (index === 1) {
    return "2" + o[index] + " choice is " + element;
  } else if (index === 2) {
    return "3" + o[index] + " choice is " + element;
  } else {
    return `${index + 1}` + o[3] + " choice is " + element;
  }
});
console.log(newArr);

// Na osnovu stringa koji unosi korisnik napraviti niz, gde cemo ispitati da li se jagoda nalazi unutar tog niza. Ako se jagoda ne nalazi unutar niza, funkcija neka vrati taj niz poredjan abecedno, s tim sto ce se na prvom mestu dodati broj 10, a na poslednjem broj 100.
// Dok ako se jagoda nalazi unutar niza vratiti poziciju gde se ona nalazi.
