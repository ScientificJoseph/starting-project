const person = {
    name: 'Joseph',
    age: 52,
    hobbies: ['sports', 'Cooking'],
    greet: function(){
        alert('Hello to you')
    }
}

// person.age = 53;
// delete person.age;
person.age = undefined
person.isAdmin = true

console.log(person)