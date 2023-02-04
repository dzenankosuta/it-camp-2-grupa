// Constructor function for Objects:

function User(firstName, lastName, score) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.score = score;
}

const nikola = new User("Nikola", "Bozovic", 4);
console.log(nikola);

// Svi objekti u JavaScriptu su povezani sa nekim Prototype Objektom. Tako da mozemo reci da svaki objekat ima Prototype.
// Prototype je objekat koji sadrzi odredjena svojstva i metode.

User.prototype.incrementScore = function () {
  this.score += 1;
};

nikola.incrementScore();
console.log(nikola);


// Pravljenje objekta preko new keyword
const obj3 = new Object({
  name: "Aladin",
  age: 19,
});
console.log(obj3);

