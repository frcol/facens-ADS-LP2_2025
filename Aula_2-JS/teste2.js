let person = {
    name: 'João',
    age: 25,
    weight: 80.5,
    isAdmin: true,
    cars: ['Ferrari', 'Fusca'],
    address: {
        street: 'Rua 1',
        number: 123
    },

    print: function() {
        console.log(this.name);
    }
}

console.log(person.address.street);

// console.log(person.name);
// console.log(person['name']);

// for (let property in person) {
//     console.log(property+": "+person[property]);
// }