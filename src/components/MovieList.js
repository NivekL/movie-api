import React from 'react'
import Movie from './Movie'
import movieListStyle from '../css/movieListStyle.module.css'

function MovieList(props) {
    return (
        <div>
            <ul id="movie-list" className={movieListStyle.listWrapper}>
                {
                    props.movies && props.movies.map( (movie) => {
                        return <Movie key={movie.imdbID} movie={movie} />
                    })
                }
            </ul>
        </div>
    )
}

export default MovieList
