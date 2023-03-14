// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// 3 3 3

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }
// 0 1 2
// Funkcija za prikupljanje podataka sa servera
// const getUsers = () => {
//   return fetch("https://jsonplaceholder.typicode.com/users")
// .then((response) => response.json())
// .then((data) => console.log(data))
// .catch((error) => console.log(error.message))
// .finally(() => setTimeout(getUsers, 1000 * 60 * 5)); // 5 minutes
// };

// getUsers();

// Asinhrona funkcija za prikupljanje podataka sa servera
// User sa datim id-om
const getUsers = async (id) => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const users = await data.json();
  console.log(users);
};

getUsers(5);

// async function getUsers() {
//     const data = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await data.json();
// }

// Prikupiti sve usere, a nakon toga vratiti json sa svim userima koji su prikazani sa odredjenim svojstvima:
// id, name, username, email(ispisan malim slovima), phone, adress sa svojstvima street, suite.

const getMapUsers = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();
  const mapUsers = users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email.toLowerCase(),
      phone: user.phone,
      address: {
        street: user.address.street,
        suite: user.address.suite,
      },
    };
  });
  return mapUsers;
};

getMapUsers()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
