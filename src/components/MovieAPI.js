import React, { Component } from 'react'
import Form from './Form'
import MovieList from './MovieList'

class MovieAPI extends Component {
    render() {
        return (
            <div>
                <Form />
                <MovieList />
            </div>
        )
    }
}

export default MovieAPI
