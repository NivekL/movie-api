import React from 'react'

function Movie(props) {
    return (
        
            <li>
                <img src={props.movie.Poster} alt="Movie poster"/>
                <h2>{props.movie.Title}</h2>
                <p>{props.movie.Year}</p>
                <p>{props.movie.Type}</p>
            </li>
        
    )
}

export default Movie
