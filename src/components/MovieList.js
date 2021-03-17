import React from 'react'
import Movie from './Movie'
import movieListStyle from '../css/movieListStyle.module.css'

function MovieList(props) {
    return (
        <div>
            <p id="error-message" className="errorMessage"></p>
            <ul id="movie-list" className={movieListStyle.listWrapper}>
                {
                    props.movies.map( (movie) => {
                        // console.log(movie.imdbID);
                        return <Movie key={movie.imdbID} movie={movie} />
                    })
                }
            </ul>
        </div>
    )
}

export default MovieList
