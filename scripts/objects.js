const user = {
    fullName: "Chioma Theresa",
    email: "chiomatheresa@gmail.com",
    age: 21,
    phoneNumber: [
        {
            home: '214577456999',
            mobile: '85586566554'
        }
    ],
    children: ['Okiki', 'James'],
    newBirth: function () {
        return `${this.fullName} birthed a new child`
    }
}

console.log(user)
console.log(user.fullName)
console.log(user.newBirth())
user.fullName = "Theresa Chioma"
console.log(user.fullName)
console.log(user.age)
console.log(user.newBirth())

