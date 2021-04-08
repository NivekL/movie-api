import React, { Component } from 'react'
import Form from './Form'
import MovieList from './MovieList'
import '../css/globalStyle.css'

class MovieAPI extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             movies: [],
             error: ''
        }
    }

    async componentDidMount() {
            this.fetchMovies("batman","");
    }

    fetchMovies = async (searchString, movieType) => {
        try {
            let url = ("http://www.omdbapi.com/?apikey=72e2b6a0&s=" + searchString + "&type=" + movieType);
            const response = await fetch(url);
            const data = await response.json();

            this.setState({
                movies: data.Search,
                error: data.Error
            })

            console.log(this.state.movies);
            // console.log(this.state.movies.Error);
            console.log(url);
        } catch (error) {
            console.log(error);
        }
        
    }
    
    render() {
        return (
            <div className="main-wrap">
                <p className="errorMessage">{this.state.error}</p>
                <Form fetchMovies={this.fetchMovies} />
                <MovieList movies={this.state.movies} />
            </div>
        )
    }
}

export default MovieAPI
