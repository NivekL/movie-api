import React from 'react'
import Movie from './Movie'
import movieListStyle from '../css/movieListStyle.module.css'

function MovieList(props) {
    return (
        <div>
            <p id="error-message" className="errorMessage"></p>
            <ul id="movie-list" className={movieListStyle.listWrapper}>
                {
                    props.movies.map( (item) => {
                        return <Movie key={item.imdbID} movie={item} />
                    })
                }
            </ul>
        </div>
    )
}

export default MovieList
