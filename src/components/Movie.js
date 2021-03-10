import React from 'react'
import movieStyle from '../css/movieStyle.module.css'

function Movie(props) {
    return (
        
            <li className={movieStyle.movieListItem}>
                <img src={props.movie.Poster} alt="Movie poster"/>
                <h2>{props.movie.Title}</h2>
                <p>{props.movie.Year} | <span>{props.movie.Type}</span></p>
            </li>
        
    )
}

export default Movie
