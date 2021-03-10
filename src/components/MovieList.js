import React from 'react'
import Movie from './Movie'

function MovieList(props) {
    return (
        <div>
            <p id="error-message"></p>
            <ul id="movie-list">
                {
                    props.movies.map( (item) => {
                        console.log(item);
                        return <Movie key={item.imdbID} movie={item} />
                    })
                }
            </ul>
        </div>
    )
}

export default MovieList
