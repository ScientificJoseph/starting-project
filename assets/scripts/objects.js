const movieList = document.getElementById('movie-list');

movieList.style['background-color'] = 'red';
movieList.style.display = 'block'

const userChosenKeyName = 'level'

let person = {
    'first name': 'Joseph',
    age: 52,
    hobbies: ['Sports', 'Cooking'],
    [userChosenKeyName]:'One',
    greet: function(){
        alert('Hello you')
    },
    1.5: 'hello'

}

// person.age = 53;
delete person.age;
// person.age = undefined;
// person.age = null;
person.isAdmin = true;

const keyName = 'first name'

console.log(person[keyName]);
console.log(person[1.5])
console.log(person['level'])
