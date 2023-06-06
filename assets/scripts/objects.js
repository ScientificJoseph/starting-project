const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const addMovieHandler = () => {
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

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
        const inputs = document.querySelectorAll('#user-input input')
        document.querySelectorAll('#user-input input').forEach
        ((input)=>{
            console.log(input)
            return input.value = '';
        })
    console.log(inputs)
    movies.push(newMovie)
    console.log(newMovie)
};

addMovieBtn.addEventListener('click', addMovieHandler)
