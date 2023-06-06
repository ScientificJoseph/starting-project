const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');


cardColor.style['backgroundColor'] = 'gold'
addbtn.style['backgroundColor'] = 'red'
filter.style['backgroundColor'] = 'green'
searchbtn.style['backgroundColor'] = 'black'

    if (
        title.trim() === '' ||
        extraName.trim() === '' ||
        extraValue.trim() === ''
    ) {
        return;
    }

    const newMovie = {
       info:{
        title,
        [extraName]: extraValue
       },
       id: Math.random()
    };
        document.querySelectorAll('#user-input input').forEach((input)=>{
            console.log(input)
            return input.value = '';
        })
    movies.push(newMovie)
    console.log(newMovie)
};

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
