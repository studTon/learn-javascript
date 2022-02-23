const person = {
    name: {
        first: 'John',
        last: 'Smith'
    },
    age: 32,
    bio: function() {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function() {
        console.log(`Hi! I'm ${this.name[0]}.`);
  }
};
//console.log(person);
//person.bio();
// console.log(person.name.first);
// console.log(person['name']['last']);

person['name']['first'] = 'Helen';
console.log(person.name)