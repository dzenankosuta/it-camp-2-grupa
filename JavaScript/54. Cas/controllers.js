const { returnResponse } = require('./helper')
const User = require('./classes')

const users = [new User("Dejan", 21, "ADMIN", "12345"), new User("Ilma", 20, "BOSS", "12345")]

const getUsers = (req, res) => {

    const id = req.query.id;

    if(id) {

    for(let i = 0; i < users.length ; i++) {
        if (users[i].id === id) {
            return returnResponse(200, "Nasli smo korisnika sa tim idjem", res, users[i])
        }
    }

    return returnResponse(404, "Nije nadjem korisnik", res)

}

    if(users.length === 0) {
        return returnResponse(404, "Not found, no users", res)
    }
    return returnResponse(200, "Uspseno su poslati korisnici", res, users)
}

const addUser = (req, res) => {

    const {name, password, permission, age, userName, userPassword} = req.body

    const loggedUser = users.filter( e =>  e.name === userName)[0]

    if(!loggedUser) {
        return returnResponse(401, "Nemate pristput ovoj mogucnosti", res)
    }

    console.log(userPassword, loggedUser.password);

    if (userPassword != loggedUser.password)
        return returnResponse(400, "Wrong credentials", res)

    if(loggedUser.permission !== "ADMIN")
        returnResponse(403, "Nemate dozvolu", res)

    try{
   const newUser = new User(name, age, permission, password)
   users.push(newUser)
   return returnResponse(201, "Korisnik je kreiran", res, newUser)
    }
    catch(err) {
        return returnResponse(400, err.message, res)
    } 
}

module.exports = {
    getUsers,
    addUser
}