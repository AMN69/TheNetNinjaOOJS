class User {
    constructor(email, name) {
        this.email = email
        this.name = name
    }
}

var userOne = new User('pepe@pepe.com', 'Pepe')
var userTwo = new User('jose@jose.com', 'José')

console.log(userOne)
console.log(userTwo)