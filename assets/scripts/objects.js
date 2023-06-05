const cardColor = document.getElementById('user-input');
const addbtn = document.getElementById('add-movie-btn')
const filter = document.getElementById('filter')
const searchbtn = document.getElementById('search-btn') 
const movieList = document.getElementById('movie-list');

cardColor.style['backgroundColor'] = 'gold'
addbtn.style['backgroundColor'] = 'red'
filter.style['backgroundColor'] = 'green'
searchbtn.style['backgroundColor'] = 'black'

const salute = () => {
    alert('Good Morning Love...')
}
const message = () => {
    alert('The Sun Is Amazing!')
}

addbtn.addEventListener('click', salute)
searchbtn.addEventListener('click', message)

movieList.style['background-color'] = 'red';
movieList.style.display = 'block'

const userChosenKeyName = 'level'

let person = {
    'first name': 'Joseph',
    age: 52,
    hobbies: ['Sports', 'Cooking'],
    [userChosenKeyName]:'One',
    greet: function(){
        alert('Hello You')
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
console.log(person['level'])
console.log(person[1.5])
