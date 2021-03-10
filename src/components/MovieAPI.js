import React, { Component } from 'react'
import Form from './Form'
import MovieList from './MovieList'

class MovieAPI extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             movies: []
        }

        console.log(this.state.movies);
    }

    fetchMovies = async (searchString) => {
        try {
            let errorMessage = document.getElementById("error-message");
            let movieList = document.getElementById("movie-list");
            let url = ("http://www.omdbapi.com/?apikey=72e2b6a0&s=" + searchString);
            const response = await fetch(url);
            const data = await response.json();
            if(data.Response === "False") {
                errorMessage.style.display = "block";
                movieList.style.display = "none";
                return errorMessage.innerText = `${data.Error}`;
            } else {
                errorMessage.style.display = "none";
                movieList.style.display = "block";
                this.setState({
                    movies: data.Search
                });
            }
            console.log(this.state.movies);
            // console.log(this.state.movies.Error);
            console.log(this.state.movies.Response);
        } catch (error) {
            console.log(error);
        }
        
    }
    
    render() {
        return (
            <div>
                <Form fetchMovies={this.fetchMovies} />
                <MovieList movies={this.state.movies} />
            </div>
        )
    }
}

export default MovieAPI
