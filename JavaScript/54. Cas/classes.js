var id = 0

class User {
    constructor(name, age, permission, password) {
        if (!name || !age || !permission || !password)
            throw Error("User must have all of the required fields")

        if (permission != "ADMIN" && permission!= "BOSS" && permission!="USER")
            throw Error("Ta uloga ne postoji")

        this.id = (id++).toString()
        this.name = name
        this.age = age
        this.permission = permission
        this.password = password
    }

}

module.exports = User