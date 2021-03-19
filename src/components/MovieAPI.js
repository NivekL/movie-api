import React, { Component } from 'react'
import Form from './Form'
import MovieList from './MovieList'
import '../css/globalStyle.css'

class MovieAPI extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             movies: []
        }
    }

    async componentDidMount() {
            this.fetchMovies("batman","");
    }

    fetchMovies = async (searchString, movieType) => {
        try {
            let errorMessage = document.getElementById("error-message");
            let movieList = document.getElementById("movie-list");
            let url = ("http://www.omdbapi.com/?apikey=72e2b6a0&s=" + searchString + "&type=" + movieType);
            const response = await fetch(url);
            const data = await response.json();

            if(data.Response === "False") {
                errorMessage.classList.remove("hidden");
                movieList.classList.add("hidden");
                return errorMessage.innerText = data.Error;
            } else {
                errorMessage.classList.add("hidden");
                movieList.classList.remove("hidden");
                this.setState({
                    movies: data.Search
                })
            }
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
                <Form fetchMovies={this.fetchMovies} />
                <MovieList movies={this.state.movies} />
            </div>
        )
    }
}

export default MovieAPI
