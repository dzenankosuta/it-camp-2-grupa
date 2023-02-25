// JavaScript Set je kolekcija unikatnih vrednosti.

const mySet = new Set([14, "it camp", true, [1, 2, 3]]);
console.log(mySet);

// Metode Setova:

// 1. Za kreiranje seta koristimo new Set([1,2,3])

// 2. Za dodavanje elemenata koristimo add() metodu:

mySet.add(false);
console.log(mySet);

// 3. Za brisanje elemenata koristimo delete(vrednost elementa) metodu:
mySet.delete(true);
console.log(mySet);

// 4. Za proveru da li set sadrzi odredjenu vrednost koristimo has() metodu:

console.log(mySet.has(false));

// 5. forEach() metoda sluzi za iteraciju kroz set:

mySet.forEach((el) => console.log(el));

// 6. values() metoda vraca iterator sa vrednostima seta:

console.log(mySet.values());

// Za proveru duzine seta se size property:

console.log(mySet.size);

// Napraviti funkciju koja vraca novi niz bez duplikata:

// 1. nacin
const newArr = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
console.log(newArr([1, 2, 3, 2, 1, 4, 5, 5]));

// 2. nacin

function newArr2(arr) {
  const newSet = new Set(arr);
  const newArr = [...newSet];
  return newArr;
}
console.log(newArr2([1, 2, 3, 2, 1, 4, 5, 5]));

// Mape u JavaScriptu sadrze key-value parove gde keys (kljucevi) mogu biti bilo kog tipa podatka.
// Mape pamte originalni redosled elemenata.

const myMap = new Map([
  ["apple", 60],
  ["orange", 198],
  [true, 19],
  [false, -19],
]);

console.log(myMap);

// Glavne metode kod Map_a:

// 1. Za kreiranje mape se koristi new Map;

// 2. Za setovanje vrednosti koristimo set()

// Pravljenje nogog key-value para
myMap.set("strawberry", 240);
console.log(myMap);

// Izmena vrednosti za postojeci key.
myMap.set(false, 0);
console.log(myMap);

// 3. get() metoda se koristi za dobijanje vrednosti odredjenog kljuca.

console.log(myMap.get("apple"));

// 4. delete() metoda sluzi za brisanje key-value para;

myMap.delete("orange");
console.log(myMap);

// 5. has() metoda proverava na osnovu kljuca da li je odredjeni key-value par prisutan u mapi.

console.log(myMap.has(true));
console.log(myMap.has("pineapple"));

// 6. forEach() metoda sluzi za iteraciju kroz mapu:

myMap.forEach((el) => console.log(el));

// 7. entries() metoda vraca key-value parove u iteratoru.

console.log(myMap.entries());

// Za proveru duzine mape se koristi size property:

console.log(myMap.size);

// Zadatak:
/* We have a MAP with log of the events that happened during the game. 
The VALUES are the events themselves,and the KEYS are the minutes in which each event happened a football game has 90 minutes plus some extra time)

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, it was found that the yellow card from 64 minutes was unfair. So remove this event from the game events log
3. Print the following string to the console: "an event happened, on average, every 9 minutes"
4. Loop over the events and log them to the console, marking whether it's in the first half or the second half (after 45 min) of the game like this:
    [FIRST HALF] 17: ⚽ GOAL
*/

const gameEvents = new Map([
  [17, "Goal"],
  [17, "offside"],
  [36, "Substitution"],
  [47, "Goal"],
  [61, "Substitution"],
  [64, "Yellow card"],
  [69, "Red card"],
  [70, "Substitution"],
  [72, "Substitution"],
  [76, "Goal"],
  [80, "Goal"],
  [92, "Yellow card"],
]);

function events(someMap) {
  const events = [...new Set(someMap.values())];

  return events;
}

console.log(events(gameEvents));
