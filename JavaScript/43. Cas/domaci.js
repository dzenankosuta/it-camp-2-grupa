//  1. Write a JavaScript program to sort an array of JavaScript objects:

const library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

// 1. Nacin
function sort() {
  max = library[0].title.length;
  for (i = 1; i < library.length; i++) {
    if (library[i].title.length > max) {
      max = library[i].title.length;
    }
  }
  for (i = 0; i < library.length - 1; i++) {
    for (j = i + 1; j < library.length; j++) {
      for (k = 0; k < max; k++) {
        if (library[i].title[k] > library[j].title[k + 1]) {
          pom = library[i];
          library[i] = library[j];
          library[j] = pom;
        }
      }
    }
  }
  console.log(library);
}
console.log(sort());

// 2. Nacin

const sort2 = (arr) => {
  const newArr = arr.map((element) => element.title);
  newArr.sort();
  const finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.find((element) => element.title === newArr[i])) {
      finalArr.push(arr.find((element) => element.title === newArr[i]));
    }
  }

  return finalArr;
};
console.log(sort2(library));
