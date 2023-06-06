const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = () => {
    const movieList = document.getElementById('movie-list');
    if (movies.length === 0) {
        movieList.classList.remove('visivle')
        alert('hello')
        return
    } else {
        movieList.classList.add('visible')
    }
    movieList.innerHTML = '';
    // console.log(movieList)
    movies.forEach((movie) => {
        const movieEl = document.createElement('li')
        movieEl.textContent = movie.info.title;
        movieList.append(movieEl);
        // console.log(movieList)
    });
}

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
        document.querySelectorAll('#user-input input').forEach
        ((input)=>{
       
            return input.value = '';
        })

    movies.push(newMovie)
    renderMovies()
};

addMovieBtn.addEventListener('click', addMovieHandler)
